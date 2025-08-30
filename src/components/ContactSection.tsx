import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnnzrdnw");

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate on innovative projects in digital transformation and AI? 
          Let's discuss how we can create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in the fields of digital transformation and artificial intelligence.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Email</h4>
                <p className="text-muted-foreground">niharminemassine@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-muted-foreground">Tinghir, Morocco</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Phone</h4>
                <p className="text-muted-foreground">Available upon request</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/massinNiss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md transition hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/massineniharmine/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            {state.succeeded ? (
              <p className="text-green-500">Thanks for your message! I will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input name="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input name="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" name="email" placeholder="your.email@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input name="subject" placeholder="What's this about?" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project or opportunity..." rows={6} required />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg" disabled={state.submitting}>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-card border border-primary/20 rounded-2xl px-8 py-6 backdrop-blur-md">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Open to Opportunities</h3>
            <p className="text-muted-foreground">
              Interested in internships, full-time positions, or project collaborations in AI and digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
