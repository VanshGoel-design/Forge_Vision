"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { collection, serverTimestamp } from "firebase/firestore";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Starfield from "@/components/starfield";
import PixelButton from "@/components/pixel-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { addDocumentNonBlocking, useFirestore } from "@/firebase";

const formSchema = z.object({
  name: z.string().min(2, "Callsign must be at least 2 characters."),
  email: z.string().email("Invalid coordinates format."),
  message: z.string().min(10, "Message payload must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (!firestore) {
      toast({
        variant: "destructive",
        title: "// UPLINK FAILED //",
        description: "Firestore is not initialized. Please try again later.",
      });
      return;
    }
    
    const submissionsCollection = collection(firestore, "nam5");
    addDocumentNonBlocking(submissionsCollection, {
      ...data,
      submittedAt: serverTimestamp(),
    });

    toast({
      title: "// TRANSMISSION RECEIVED //",
      description: "Message decoded successfully. We will reply shortly.",
    });
    form.reset();
  };

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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-green-300">YOUR CALLSIGN (Name):</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="> Enter your callsign..." className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-green-300">RETURN COORDINATES (Email):</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="> Enter your return coordinates..." className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-green-300">MESSAGE PAYLOAD (Your Message):</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="> Enter your message payload..." rows={6} className="bg-black/70 border-green-400/50 text-white font-pixel focus:ring-green-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <PixelButton type="submit" variant="primary" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "[ SENDING... ]" : "[ TRANSMIT MESSAGE ]"}
                </PixelButton>
              </div>
            </form>
          </Form>
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
