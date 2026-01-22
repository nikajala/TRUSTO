import { Shield, Lock, Zap } from "lucide-react";
import { UrlInput } from "@/components/scanner/UrlInput";

interface HeroSectionProps {
  onScan: (url: string) => void;
  isLoading: boolean;
}

export function HeroSection({ onScan, isLoading }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">AI-Powered Protection</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Check Any Website{" "}
            <span className="text-primary">Before You Trust It</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Instant scam detection using AI and security analysis. 
            Protect yourself from online fraud in seconds.
          </p>

          {/* URL Input */}
          <div className="flex justify-center mb-12">
            <UrlInput onSubmit={onScan} isLoading={isLoading} />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-safe" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-suspicious" />
              <span>Results in Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>No Account Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
