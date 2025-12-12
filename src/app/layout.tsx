
import type { Metadata } from "next";
import { Figtree, Spectral, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Spectral({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Cosmo Studio - Your Universal AI Workspace",
  description: "Chat with any LLM model, switch providers instantly, and manage your AI workflow in one beautiful desktop app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
