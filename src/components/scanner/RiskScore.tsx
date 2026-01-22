import { cn } from "@/lib/utils";

interface RiskScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export function RiskScore({ score, size = "lg" }: RiskScoreProps) {
  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: "Safe", color: "safe" };
    if (score <= 60) return { level: "Suspicious", color: "suspicious" };
    return { level: "High Risk", color: "danger" };
  };

  const { level, color } = getRiskLevel(score);

  const sizeClasses = {
    sm: "h-24 w-24 text-2xl",
    md: "h-32 w-32 text-3xl",
    lg: "h-44 w-44 text-5xl",
  };

  const ringClasses = {
    safe: "ring-safe",
    suspicious: "ring-suspicious",
    danger: "ring-danger",
  };

  const bgClasses = {
    safe: "bg-safe-light",
    suspicious: "bg-suspicious-light",
    danger: "bg-danger-light",
  };

  const textClasses = {
    safe: "text-safe",
    suspicious: "text-suspicious",
    danger: "text-danger",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* Animated ring for high risk */}
        {color === "danger" && (
          <div
            className={cn(
              "absolute inset-0 rounded-full ring-4 animate-pulse-ring",
              ringClasses[color]
            )}
          />
        )}
        <div
          className={cn(
            "flex items-center justify-center rounded-full ring-4",
            sizeClasses[size],
            ringClasses[color],
            bgClasses[color]
          )}
        >
          <span className={cn("font-bold", textClasses[color])}>{score}</span>
        </div>
      </div>
      <div
        className={cn(
          "rounded-full px-6 py-2 text-sm font-semibold",
          color === "safe" && "bg-safe text-safe-foreground",
          color === "suspicious" && "bg-suspicious text-suspicious-foreground",
          color === "danger" && "bg-danger text-danger-foreground"
        )}
      >
        {level}
      </div>
    </div>
  );
}
