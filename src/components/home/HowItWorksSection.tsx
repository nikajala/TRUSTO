import { Link2, Brain, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste the URL",
    description: "Copy and paste any website URL you want to check into our scanner.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes the website for scam patterns, manipulative language, and red flags.",
  },
  {
    icon: ShieldCheck,
    title: "Get Results",
    description: "Receive a clear risk score with plain-English explanations of any concerns found.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Checking a website takes just seconds. Here's how we protect you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center p-6"
              >
                {/* Step number */}
                <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
