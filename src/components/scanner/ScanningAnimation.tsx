import { Shield, Globe, FileSearch, Brain } from "lucide-react";

const steps = [
  { icon: Globe, label: "Connecting to website..." },
  { icon: FileSearch, label: "Analyzing content..." },
  { icon: Brain, label: "AI pattern detection..." },
  { icon: Shield, label: "Generating risk assessment..." },
];

interface ScanningAnimationProps {
  currentStep?: number;
}

export function ScanningAnimation({ currentStep = 0 }: ScanningAnimationProps) {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      {/* Scanning visual */}
      <div className="relative">
        <div className="h-32 w-32 rounded-full border-4 border-primary/20">
          <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="h-12 w-12 text-primary" />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isComplete = index < currentStep;

          return (
            <div
              key={step.label}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                isActive ? "opacity-100" : isComplete ? "opacity-50" : "opacity-30"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span className={`text-sm ${isActive ? "font-medium" : ""}`}>
                {step.label}
              </span>
              {isActive && (
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
