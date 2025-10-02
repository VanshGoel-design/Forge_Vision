"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/starfield";

export default function Contact() {

  const handleContactClick = () => {
    window.location.href = "tel:+919686545890";
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black text-green-400 font-pixel py-24 overflow-hidden flex items-center justify-center">
      <Starfield />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center">
            <h3 className="text-2xl md:text-4xl text-white mb-6 animate-pulse">// DIRECT FREQUENCIES //</h3>
             <Button size="lg" onClick={handleContactClick} className="text-lg px-8 py-6">
              <Phone className="mr-3 h-6 w-6" />
              Direct Comms Link
            </Button>
        </div>
      </div>
    </section>
  );
}
