"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="rounded-full relative"
    >
      <Sun
        className={
          `h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`
        }
      />
      <Moon
        className={
          `absolute h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`
        }
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
