import { 
  Cpu, 
  Globe, 
  Lock, 
  MessageSquare, 
  Zap, 
  Layers 
} from "lucide-react"

const features = [
  {
    name: "Multi-Provider Support",
    description: "Connect to OpenAI, Anthropic, Google Gemini, Custom models and more. Bring your own API keys.",
    icon: Globe,
  },
  {
    name: "Local Models",
    description: "Run local models privately using Ollama or LM Studio integration. No data leaves your device.",
    icon: Cpu,
  },
  {
    name: "Unified Interface",
    description: "A consistent, beautiful chat interface for all your models. No more switching between different web UIs.",
    icon: Layers,
  },
  {
    name: "Chat Management",
    description: "Organize your chats with folders, tags, and powerful search. Keep your AI conversations structured.",
    icon: MessageSquare,
  },
  {
    name: "Privacy First",
    description: "Your data stays on your device. We don't train on your conversations. Local-first architecture.",
    icon: Lock,
  },
  {
    name: "Lightning Fast",
    description: "Native desktop performance. Keyboard shortcuts, quick commands, and instant startup.",
    icon: Zap,
  },
]

export function Features() {
  return (
    <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto px-4">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to manage your AI interactions in one place.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
