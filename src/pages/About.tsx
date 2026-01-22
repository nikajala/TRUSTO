import { Shield, Target, Users, Lock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Protection First",
    description: "Every feature we build is designed with one goal: keeping users safe from online fraud.",
  },
  {
    icon: Lock,
    title: "Privacy Matters",
    description: "We don't store your searches or track your browsing. Your privacy is non-negotiable.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Security tools should be free and easy to use. No technical knowledge required.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "We continuously improve our AI to provide the most reliable scam detection possible.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About ScamShield
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make the internet safer by helping people identify 
              and avoid online scams before they lose money or personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                Every day, millions of people fall victim to online scams, losing billions of dollars 
                to fraudsters who create convincing fake websites, investment schemes, and phishing pages. 
                The problem is getting worse as scammers become more sophisticated.
              </p>
              <p className="text-muted-foreground mb-4">
                ScamShield was created to level the playing field. We believe everyone deserves access 
                to advanced security tools, not just tech-savvy users or large corporations. Our AI-powered 
                analysis can detect scam patterns in seconds, giving you the information you need to make 
                informed decisions.
              </p>
              <p className="text-muted-foreground">
                Whether you're shopping online, exploring an investment opportunity, or simply checking 
                an unfamiliar link, ScamShield provides the protection you need—instantly and for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">How ScamShield Helps</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">For everyday users:</strong> Check any website before 
                making a purchase, sharing information, or clicking on suspicious links.
              </p>
              <p>
                <strong className="text-foreground">For online shoppers:</strong> Verify e-commerce sites 
                before entering payment details to avoid fake stores.
              </p>
              <p>
                <strong className="text-foreground">For investors:</strong> Screen investment platforms 
                for red flags associated with financial fraud.
              </p>
              <p>
                <strong className="text-foreground">For businesses:</strong> Protect employees and customers 
                by quickly verifying partner websites and vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-semibold mb-2">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              ScamShield is an automated analysis tool that provides guidance based on AI pattern detection. 
              While we strive for accuracy, no tool can guarantee 100% detection of all scams. 
              Always exercise personal judgment and caution when sharing personal or financial information online.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
