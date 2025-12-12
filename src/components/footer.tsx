import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col gap-8 py-8 md:py-12 mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold">Cosmo Studio</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The universal desktop client for all your AI models. 
              Chat smarter, faster, and more privately.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li>
                  <a 
                    href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Download
                  </a>
                </li>
                <li><Link href="/changelog">Changelog</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t pt-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Cosmo Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  )
}
