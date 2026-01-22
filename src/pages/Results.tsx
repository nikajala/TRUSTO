import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Share2, RotateCcw, ExternalLink, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { RiskScore } from "@/components/scanner/RiskScore";
import { AnalysisReason } from "@/components/scanner/AnalysisReason";
import { ScanningAnimation } from "@/components/scanner/ScanningAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnalysis } from "@/hooks/useAnalysis";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { analyzeUrl, isLoading, result, error, reset } = useAnalysis();
  const [scanStep, setScanStep] = useState(0);

  useEffect(() => {
    const url = sessionStorage.getItem("scanUrl");
    if (!url) {
      navigate("/");
      return;
    }
    
    analyzeUrl(url);

    // Animate through scan steps
    const interval = setInterval(() => {
      setScanStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleCheckAnother = () => {
    sessionStorage.removeItem("scanUrl");
    reset();
    navigate("/");
  };

  const handleShare = async () => {
    if (!result) return;
    
    const text = `I checked ${result.url} with ScamShield - Risk Score: ${result.score}/100 (${result.verdict})`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Result summary copied to your clipboard.",
      });
    }
  };

  const scannedUrl = sessionStorage.getItem("scanUrl") || "";

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Analyzing Website</CardTitle>
                <p className="text-sm text-muted-foreground break-all">{scannedUrl}</p>
              </CardHeader>
              <CardContent>
                <ScanningAnimation currentStep={scanStep} />
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-danger-light">
                    <AlertCircle className="h-8 w-8 text-danger" />
                  </div>
                  <h2 className="text-xl font-semibold">Analysis Failed</h2>
                  <p className="text-muted-foreground">{error}</p>
                  <Button onClick={handleCheckAnother}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Analysis Complete</h1>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              {result.url}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Risk Score Card */}
          <Card className="mb-8">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center gap-6">
                <RiskScore score={result.score} />
                <p className="text-lg font-medium text-center">
                  This website appears to be{" "}
                  <span
                    className={
                      result.verdict === "Safe"
                        ? "text-safe"
                        : result.verdict === "Suspicious"
                        ? "text-suspicious"
                        : "text-danger"
                    }
                  >
                    {result.verdict}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reasons */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Analysis Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.reasons.map((reason, index) => (
                <AnalysisReason key={index} reason={reason} />
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share Result
            </Button>
            <Button onClick={handleCheckAnother}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Check Another Website
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-xs text-muted-foreground">
            This is an automated analysis tool. Results should be used as guidance only. 
            Always exercise caution when sharing personal or financial information online.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
