export interface AnalysisReason {
  text: string;
  severity: "positive" | "warning" | "critical" | "info";
}

export interface AnalysisResult {
  url: string;
  score: number;
  verdict: "Safe" | "Suspicious" | "High Risk";
  reasons: AnalysisReason[];
  analyzedAt: string;
}
