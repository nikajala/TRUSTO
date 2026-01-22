import { useState } from "react";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "Is ScamShield free to use?",
    answer: "Yes, ScamShield is completely free for individual users. We believe everyone deserves access to security tools.",
  },
  {
    question: "How accurate is the analysis?",
    answer: "Our AI is trained on thousands of known scam patterns and achieves high accuracy. However, it's designed as a guidance tool—always use personal judgment.",
  },
  {
    question: "Do you store my search history?",
    answer: "No, we do not store the URLs you scan or any personal information. Your privacy is our priority.",
  },
  {
    question: "Can scammers avoid detection?",
    answer: "Sophisticated scammers may create websites that avoid some detection. Always combine our analysis with your own research.",
  },
  {
    question: "What should I do if I've been scammed?",
    answer: "Contact your bank immediately, report to local authorities, and file a complaint with your country's fraud reporting center.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions, feedback, or need help? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" required placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us more..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">support@scamshield.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Response Time</h2>
                  <p className="text-muted-foreground">
                    We typically respond within 24-48 hours during business days. 
                    For urgent security concerns, please include "URGENT" in your subject line.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Report a Scam</h2>
                  <p className="text-muted-foreground">
                    Found a scam website? Let us know so we can improve our detection. 
                    Include the URL and any relevant details in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Quick answers to common questions about ScamShield.
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-card rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
