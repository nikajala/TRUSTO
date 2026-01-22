import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Reason {
  text: string;
  severity: "positive" | "warning" | "critical" | "info";
}

interface AnalysisReasonProps {
  reason: Reason;
}

export function AnalysisReason({ reason }: AnalysisReasonProps) {
  const iconMap = {
    positive: CheckCircle,
    warning: AlertTriangle,
    critical: XCircle,
    info: Info,
  };

  const colorClasses = {
    positive: "text-safe bg-safe-light",
    warning: "text-suspicious bg-suspicious-light",
    critical: "text-danger bg-danger-light",
    info: "text-primary bg-primary/10",
  };

  const Icon = iconMap[reason.severity];

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg p-4",
        colorClasses[reason.severity]
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <span className="text-sm font-medium">{reason.text}</span>
    </div>
  );
}
