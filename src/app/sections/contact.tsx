"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Contact() {
    const handleContactClick = () => {
    window.location.href = "tel:+919686545890";
  };
  
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground text-lg mb-8">
          For booking an appointment, please call us at +91 9686545890
        </p>
        <Button size="lg" onClick={handleContactClick}>
          <Phone className="mr-2 h-5 w-5" />
          Contact Us
        </Button>
      </div>
    </section>
  );
}
