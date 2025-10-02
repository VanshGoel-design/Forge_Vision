"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Starfield from "@/components/starfield";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PixelButton from "@/components/pixel-button";

export default function Contact() {
  const handleContactClick = () => {
    window.location.href = "tel:+919686545890";
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black text-green-400 font-pixel py-24 overflow-hidden">
      <Starfield />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl border-2 border-green-400/50 bg-black/50 p-4 md:p-8 shadow-[0_0_20px_theme(colors.green.400/50)] rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl text-white animate-pulse">// INITIATE CONTACT //</h2>
            <p className="text-sm md:text-base text-green-400/70 mt-2">{'>'} Compose your transmission below. All fields are required for successful uplink.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="callsign" className="text-lg text-green-300">YOUR CALLSIGN (Name):</label>
              <Input id="callsign" name="name" type="text" placeholder="> Enter your callsign..." className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
            </div>
            <div className="space-y-2">
              <label htmlFor="coordinates" className="text-lg text-green-300">RETURN COORDINATES (Email):</label>
              <Input id="coordinates" name="email" type="email" placeholder="> Enter your return coordinates..." className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
            </div>
            <div className="space-y-2">
              <label htmlFor="payload" className="text-lg text-green-300">MESSAGE PAYLOAD (Your Message):</label>
              <Textarea id="payload" name="message" placeholder="> Enter your message payload..." rows={6} className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
            </div>
            <div className="text-center">
              <PixelButton type="submit" variant="primary" size="lg">
                [ TRANSMIT MESSAGE ]
              </PixelButton>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl text-white mb-4">// DIRECT FREQUENCIES //</h3>
             <Button size="lg" onClick={handleContactClick}>
              <Phone className="mr-2 h-5 w-5" />
              Direct Comms Link
            </Button>
        </div>

      </div>
    </section>
  );
}
