"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";

type FormState = { error?: string; success?: string } | null;
const initialState: FormState = null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState as any);
  const formRef = useRef<HTMLFormElement>(null);
  const [charCount, setCharCount] = useState(0);

  // Reset form on success
  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
      setCharCount(0);
    }
  }, [state]);

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 w-full">
      <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Send me a message</h3>
      
      <form ref={formRef} action={formAction} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            required
            disabled={isPending}
            className="bg-secondary/40 border border-border/80 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            required
            disabled={isPending}
            className="bg-secondary/40 border border-border/80 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
            <span className={`text-[10px] uppercase tracking-wider ${charCount >= 500 ? 'text-danger' : 'text-muted-foreground'}`}>
              {500 - charCount} chars remaining
            </span>
          </div>
          <textarea 
            id="message"
            name="message" 
            required
            maxLength={500}
            disabled={isPending}
            rows={4}
            onChange={(e) => setCharCount(e.target.value.length)}
            className="bg-secondary/40 border border-border/80 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all resize-none disabled:opacity-50"
            placeholder="Hi Dharun, I'd like to discuss a product role at our company..."
          />
        </div>
        
        {state?.error && (
          <div className="text-danger text-sm font-medium bg-danger/10 px-4 py-3 rounded-lg border border-danger/20">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className="text-accent-primary text-sm font-medium bg-accent-primary/10 px-4 py-3 rounded-lg border border-accent-primary/20">
            {state.success}
          </div>
        )}
        
        <Button type="submit" variant="primary" className="w-full h-12 mt-2" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
