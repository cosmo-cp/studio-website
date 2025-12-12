import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'Cosmo - Unified AI Chat',
  description: 'Chat with GPT, Claude, and local Ollama models in one native app. Bring your own keys. Own your data.',
  keywords: ['ai chat', 'GPT', 'claude', 'ollama', 'local llm', 'desktop app'],
  openGraph: {
    title: 'Cosmo - Unified AI Chat',
    description: 'Chat with GPT, Claude, and local Ollama models in one native app.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmo - Unified AI Chat',
    description: 'Chat with GPT, Claude, and local Ollama models in one native app.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}

