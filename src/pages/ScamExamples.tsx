import { AlertTriangle, DollarSign, Gift, ShoppingBag, Briefcase, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scamTypes = [
  {
    icon: DollarSign,
    title: "Investment Scams",
    description: "Fake investment platforms promising unrealistic returns with phrases like 'guaranteed 300% profit' or 'risk-free investment.'",
    redFlags: [
      "Promises of guaranteed high returns with no risk",
      "Pressure to invest quickly before 'missing out'",
      "Vague explanations of how profits are generated",
      "Celebrity endorsements that seem too good to be true",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Fake Online Stores",
    description: "Counterfeit e-commerce sites selling products at suspiciously low prices that never arrive or are fake.",
    redFlags: [
      "Prices significantly below market value",
      "No physical address or contact information",
      "Poor website design with spelling errors",
      "Only accepting wire transfers or gift cards",
    ],
  },
  {
    icon: Gift,
    title: "Prize & Lottery Scams",
    description: "Notifications claiming you've won a prize or lottery you never entered, requiring payment to claim.",
    redFlags: [
      "You 'won' something you didn't enter",
      "Asked to pay fees to receive your prize",
      "Urgency to respond immediately",
      "Request for personal or banking information",
    ],
  },
  {
    icon: Briefcase,
    title: "Job Scams",
    description: "Fake job postings offering high pay for minimal work, often requiring upfront payments or personal information.",
    redFlags: [
      "Job requires payment for training or materials",
      "Unusually high salary for minimal qualifications",
      "Vague job descriptions",
      "Interview conducted only via text or chat",
    ],
  },
  {
    icon: Heart,
    title: "Romance Scams",
    description: "Fraudsters creating fake profiles on dating sites to build relationships and eventually ask for money.",
    redFlags: [
      "Quickly professes strong feelings",
      "Always has excuses to avoid video calls",
      "Eventually asks for money for emergencies",
      "Story inconsistencies over time",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Tech Support Scams",
    description: "Pop-ups or calls claiming your computer is infected, offering to fix it for a fee while installing malware.",
    redFlags: [
      "Unexpected pop-ups claiming virus infection",
      "Cold calls from 'Microsoft' or 'Apple'",
      "Request for remote access to your computer",
      "Pressure to pay immediately",
    ],
  },
];

const warningPhrases = [
  "Act now—limited time offer!",
  "Guaranteed returns with zero risk",
  "You've been specially selected",
  "Send money to claim your prize",
  "Your account has been compromised",
  "Exclusive opportunity for a select few",
  "Double your investment in 24 hours",
  "This is not a scam",
];

const ScamExamples = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Common Scam Examples
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn to recognize the most common types of online scams and protect yourself 
              from fraudsters who want to steal your money or data.
            </p>
          </div>
        </div>
      </section>

      {/* Scam Types */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {scamTypes.map((scam) => {
                const Icon = scam.icon;
                return (
                  <Card key={scam.title}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-danger-light">
                          <Icon className="h-5 w-5 text-danger" />
                        </div>
                        <CardTitle className="text-lg">{scam.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{scam.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Red Flags:</h4>
                        <ul className="space-y-1">
                          {scam.redFlags.map((flag) => (
                            <li key={flag} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <AlertTriangle className="h-4 w-4 text-suspicious shrink-0 mt-0.5" />
                              {flag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Phrases */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-4">
              Watch Out for These Phrases
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Scammers often use similar language patterns. Be wary when you see these:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {warningPhrases.map((phrase) => (
                <div
                  key={phrase}
                  className="flex items-center gap-3 rounded-lg bg-suspicious-light p-4"
                >
                  <AlertTriangle className="h-5 w-5 text-suspicious shrink-0" />
                  <span className="text-sm font-medium">"{phrase}"</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Safe Online</h2>
            <p className="text-muted-foreground mb-8">
              Remember: If something seems too good to be true, it probably is. 
              Always verify websites before sharing personal information or making payments.
            </p>
            <div className="flex justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Check a Website Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ScamExamples;
