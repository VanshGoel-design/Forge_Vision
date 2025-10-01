"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-primary text-glow">Touch</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? We’d love to hear from you.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 card-glow p-8 md:p-12 rounded-2xl">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Let's Connect</h3>
              <p className="text-foreground/70 mb-8">
                Fill out the form, or reach out to us via our social channels. We're always open for a chat.
              </p>
            </div>
            <div className="space-y-6">
                <Dialog>
                    <DialogTrigger asChild>
                         <Button variant="ghost" className="w-full justify-start text-lg p-6 hover:bg-primary/10 group">
                            <Phone className="w-6 h-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                            <span className='text-foreground'>Direct Contact</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] card-glow">
                        <DialogHeader>
                            <DialogTitle className="text-primary text-glow">Contact Information</DialogTitle>
                            <DialogDescription>Reach out to us directly.</DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center justify-center p-4 rounded-lg bg-secondary/50">
                            <Phone className="w-6 h-6 mr-4 text-primary" />
                            <span className="text-2xl font-bold font-code tracking-wider text-foreground">+91 9686545890</span>
                        </div>
                    </DialogContent>
                </Dialog>
               <Link href="https://github.com" target="_blank" passHref>
                <Button variant="ghost" className="w-full justify-start text-lg p-6 hover:bg-primary/10 group">
                    <Github className="w-6 h-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className='text-foreground'>GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" passHref>
                 <Button variant="ghost" className="w-full justify-start text-lg p-6 hover:bg-primary/10 group">
                    <Linkedin className="w-6 h-6 mr-4 text-primary group-hover:scale-110 transition-transform" />
                     <span className='text-foreground'>LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-accent/80">Name</Label>
              <Input id="name" name="name" required className="mt-2 bg-secondary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.5)] focus:border-primary transition-all" />
            </div>
            <div>
              <Label htmlFor="email" className="text-accent/80">Email</Label>
              <Input id="email" name="email" type="email" required className="mt-2 bg-secondary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.5)] focus:border-primary transition-all" />
            </div>
            <div>
              <Label htmlFor="message" className="text-accent/80">Message</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-2 bg-secondary focus:shadow-[0_0_15px_hsl(var(--primary)_/_0.5)] focus:border-primary transition-all" />
            </div>
            <Button type="submit" size="lg" className="w-full btn-neumorphic-glow text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
