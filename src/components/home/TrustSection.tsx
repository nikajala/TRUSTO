import { Shield, Eye, Clock, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Detection",
    description: "Advanced machine learning identifies scam patterns that humans might miss.",
  },
  {
    icon: Eye,
    title: "Content Analysis",
    description: "We analyze website content for manipulative language and false promises.",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get your analysis in under 10 seconds—no waiting, no hassle.",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "We don't store your searches. Your browsing stays private.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Trust ScamShield?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge AI with proven security analysis techniques 
            to keep you safe online.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
