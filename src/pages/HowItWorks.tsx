import { Link2, Brain, ShieldCheck, FileSearch, AlertTriangle, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Link2,
    title: "1. Submit a URL",
    description: "Simply paste any website URL into our scanner. No account or signup required—just paste and click.",
  },
  {
    icon: FileSearch,
    title: "2. Content Extraction",
    description: "Our system fetches the website's content and structure, analyzing text, links, and overall presentation.",
  },
  {
    icon: Brain,
    title: "3. AI Pattern Analysis",
    description: "Advanced AI examines the content for scam indicators: manipulative language, urgency tactics, unrealistic promises, and known fraud patterns.",
  },
  {
    icon: ShieldCheck,
    title: "4. Risk Assessment",
    description: "We calculate a risk score from 0-100 based on all detected signals, giving you a clear verdict.",
  },
];

const whatWeAnalyze = [
  {
    title: "Manipulative Language",
    description: "Urgency tactics, fear-based messaging, and high-pressure sales language.",
  },
  {
    title: "Unrealistic Promises",
    description: "Claims of guaranteed returns, get-rich-quick schemes, or too-good-to-be-true offers.",
  },
  {
    title: "Trust Indicators",
    description: "Presence of contact information, privacy policies, and professional presentation.",
  },
  {
    title: "Content Quality",
    description: "Grammar issues, generic text, and signs of hastily-created websites.",
  },
  {
    title: "Known Patterns",
    description: "Similarities to documented scam types and fraud techniques.",
  },
  {
    title: "Website Structure",
    description: "Missing essential pages, suspicious checkout flows, and poor user experience.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              How ScamShield Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Our AI-powered system analyzes websites in seconds, checking for scam patterns 
              and red flags that could put your money or data at risk.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-12">The Analysis Process</h2>
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-4">What Our AI Analyzes</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our system looks for multiple red flags and trust signals to provide an accurate assessment.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {whatWeAnalyze.map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Levels */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-12">Understanding Risk Scores</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-safe-light">
                <CheckCircle className="h-6 w-6 text-safe mt-0.5" />
                <div>
                  <h3 className="font-semibold text-safe">Safe (0-30)</h3>
                  <p className="text-sm text-muted-foreground">
                    No significant red flags detected. The website appears legitimate, but always stay cautious.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-suspicious-light">
                <AlertTriangle className="h-6 w-6 text-suspicious mt-0.5" />
                <div>
                  <h3 className="font-semibold text-suspicious">Suspicious (31-60)</h3>
                  <p className="text-sm text-muted-foreground">
                    Some concerning patterns found. Proceed with caution and verify the website through other means.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-danger-light">
                <AlertTriangle className="h-6 w-6 text-danger mt-0.5" />
                <div>
                  <h3 className="font-semibold text-danger">High Risk (61-100)</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple scam indicators detected. We strongly recommend avoiding this website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
