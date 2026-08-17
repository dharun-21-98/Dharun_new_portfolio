import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const hackerFont = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Since we are using one font for both, we can alias it
const hackerFontHeading = JetBrains_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharunanand R | Product Manager",
  description: "AI-Native Technical Product Manager building scalable digital products across Enterprise SaaS, Mobile, Commerce, and AI platforms.",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hackerFontHeading.variable} ${hackerFont.variable} antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="flex flex-col font-sans bg-background text-foreground selection:bg-accent-primary selection:text-white"
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
