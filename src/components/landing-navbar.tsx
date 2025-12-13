import { Button } from './ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">Cosmo Studio</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <span>v1.0.0</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>macOS, Win, Linux</span>
          </div>
          <ThemeToggle />
          <Button size="sm" className="gap-2" asChild>
            <a 
              href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Get Cosmo Studio
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
