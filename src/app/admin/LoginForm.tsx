"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/app/actions/auth";
import { Button } from "@/components/ui/Button";

const initialState = { error: "" };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md p-8 glass-card rounded-2xl border border-border relative overflow-hidden">
        {/* Hacker styling accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-transparent" />
        
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Secure Access</h1>
        <p className="text-sm text-muted mb-8">Enter your credentials to view messages.</p>
        
        <form action={formAction} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              name="password" 
              required
              className="bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-primary transition-colors font-mono"
              placeholder="••••••••"
            />
          </div>
          
          {state?.error && (
            <div className="text-danger text-sm font-medium bg-danger/10 px-4 py-3 rounded-lg border border-danger/20">
              {state.error}
            </div>
          )}
          
          <Button type="submit" variant="primary" className="w-full h-12" disabled={isPending}>
            {isPending ? "Authenticating..." : "Access Dashboard"}
          </Button>
        </form>
      </div>
    </div>
  );
}
