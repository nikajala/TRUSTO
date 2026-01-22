import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AnalysisReason {
  text: string;
  severity: "positive" | "warning" | "critical" | "info";
}

interface AnalysisResult {
  url: string;
  score: number;
  verdict: "Safe" | "Suspicious" | "High Risk";
  reasons: AnalysisReason[];
  analyzedAt: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ error: "URL is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Analyzing URL: ${url}`);

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Create a detailed prompt for scam analysis
    const systemPrompt = `You are a cybersecurity expert specializing in identifying online scams and fraudulent websites. Your task is to analyze a website URL and provide a risk assessment.

Analyze the following aspects:
1. Domain characteristics (suspicious patterns, misspellings of known brands)
2. Common scam indicators (urgency language, unrealistic promises, fear tactics)
3. Trust signals (likely presence of contact info, about pages, proper business structure)
4. Content patterns (investment scam language, lottery/prize claims, romance scam patterns)
5. Technical indicators (newly registered domains often have suspicious patterns)

Provide your analysis in JSON format with the following structure:
{
  "score": <number 0-100, where 0 is safest and 100 is most dangerous>,
  "reasons": [
    {"text": "<plain English explanation>", "severity": "<positive|warning|critical|info>"}
  ]
}

Guidelines for scoring:
- 0-30: Safe - legitimate website with no red flags
- 31-60: Suspicious - some concerning patterns, proceed with caution  
- 61-100: High Risk - multiple scam indicators, avoid this website

Provide 3-6 reasons explaining your assessment. Use plain English that non-technical users can understand.
For "positive" severity, highlight good trust signals.
For "warning" severity, note concerning but not definitive red flags.
For "critical" severity, highlight strong scam indicators.
For "info" severity, provide neutral observations.`;

    const userPrompt = `Analyze this website URL for potential scam indicators: ${url}

Based on the URL pattern and common characteristics of legitimate vs scam websites, provide your risk assessment.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error("Failed to analyze website");
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from AI");
    }

    console.log("AI Response:", content);

    // Parse the JSON from the AI response
    let analysisData;
    try {
      // Extract JSON from the response (it might be wrapped in markdown code blocks)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysisData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found in response");
      }
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback response
      analysisData = {
        score: 50,
        reasons: [
          { text: "Unable to fully analyze this website. Please proceed with caution.", severity: "warning" as const },
          { text: "Consider researching this website through other sources before trusting it.", severity: "info" as const },
        ],
      };
    }

    // Determine verdict based on score
    let verdict: "Safe" | "Suspicious" | "High Risk";
    if (analysisData.score <= 30) {
      verdict = "Safe";
    } else if (analysisData.score <= 60) {
      verdict = "Suspicious";
    } else {
      verdict = "High Risk";
    }

    const result: AnalysisResult = {
      url,
      score: analysisData.score,
      verdict,
      reasons: analysisData.reasons,
      analyzedAt: new Date().toISOString(),
    };

    console.log("Analysis result:", result);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in analyze-website function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to analyze website" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
