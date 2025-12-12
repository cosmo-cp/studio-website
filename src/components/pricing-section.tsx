

import { Button } from './ui/button';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Start for free. Upgrade for power features.</p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl border border-border bg-card flex flex-col w-full max-w-md">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <div className="text-3xl font-bold">$0</div>
              <p className="text-sm text-muted-foreground mt-2">Forever free for everyone.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Unlimited Local Models (Ollama)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Bring Your Own Key (OpenAI, Anthropic)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Basic Chat Interface</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Markdown Support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <a 
                href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Download Now
              </a>
            </Button>
          </div>

          {/* Pro Plan */}
          {/* <div className="p-8 rounded-2xl border border-primary/50 bg-primary/5 relative flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Power User</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$19</span>
                <span className="text-muted-foreground">/lifetime</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">One-time payment. Own it forever.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-foreground" />
                <span>Everything in Community</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-foreground" />
                <span>Cloud Sync (Encrypted)</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-foreground" />
                <span>Voice Mode</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-foreground" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-foreground" />
                <span>Early Access to New Features</span>
              </li>
            </ul>
            <Button className="w-full">Get Lifetime Access</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
