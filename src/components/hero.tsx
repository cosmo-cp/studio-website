"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto px-4">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]"
        >
          Your Universal AI Workspace <br className="hidden sm:inline" />
          for every model and provider.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
        >
          Cosmo Studio is a powerful desktop application that lets you chat with any LLM model. 
          Connect multiple providers, switch models instantly, and streamline your AI workflow.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        <Button size="lg" asChild>
          <a 
            href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download for Windows
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#features">
            Explore Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 rounded-xl border bg-card text-card-foreground shadow-xl overflow-hidden"
      >
        <div className="aspect-video w-full bg-muted/50 flex items-center justify-center text-muted-foreground">
            {/* Placeholder for the app screenshot */}
            <div className="text-center p-10">
                <p className="text-2xl font-semibold">App Screenshot Placeholder</p>
                <p className="text-sm">Replace with actual application screenshot</p>
            </div>
        </div>
      </motion.div>
    </section>
  )
}
