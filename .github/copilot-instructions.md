# COSMO STUDIO — Copilot Instructions

**Purpose:**
This Markdown file contains precise, actionable instructions for GitHub Copilot (or any AI coding assistant) to scaffold and implement the Cosmo landing page — a modern, high-conversion, dark-first SaaS landing page built with React (Next.js App Router preferred), Tailwind CSS, Shadcn/UI, Lucide React, and Framer Motion.
---

## Project Quick Summary

Design fidelity requirement: The final landing page must visually match the shadcn landing page demo (https://shadcnstore.com/templates/dashboard/shadcn-dashboard-landing-template/landing#) as closely as possible. This means adopting the same layout, spacing, card styles, component primitives (Card, Button, Sheet, Accordion, Badge), Tailwind utility patterns (bg-card, text-muted-foreground, border, rounded-xl, backdrop-blur, etc.), and micro-interactions. Use the shadcn demo as the single-source visual reference when choosing spacing, typography scale, and component composition. Replace placeholder assets with production-ready SVGs and images that match the demo's look where needed.

* **Product:** Cosmo Studio — unified desktop chat app (macOS / Windows / Linux) with BYOK (Bring Your Own Key).
* **Framework:** React (Next.js App Router preferred) or Vite if requested.
* **Styling:** Tailwind CSS.
* **Components:** Shadcn/UI (Radix primitives), Lucide React icons.
* **Animations:** Framer Motion.
* **Theme:** Dark-first (slate/zinc background with vibrant Indigo/Violet accents).
* **Typography:** Inter (or Geist Sans).

---

## Goals for Copilot

1. Create a **scalable component structure** exactly matching the provided JSX layout (see "Mandatory Component Architecture").
2. Produce **clean, accessible, mobile-first** Tailwind classes and responsive breakpoints.
3. Create a `constants.ts` file that centralizes features, testimonials, FAQs, team, and logos.
4. Implement **Hero with download CTA**, **infinite logo carousel**, **feature grid split (Live Now vs Roadmap)**, **pricing**, **theme customizer**, and other sections with attention to microcopy for conversions.
5. Keep the code **type-safe** (TypeScript) and export default components. Use Framer Motion for entrance animations.
6. Follow Shadcn conventions for components (Card, Button, Toggle, etc.).
7. Provide small mocked assets (SVG placeholders) where needed and document where to replace with production assets.

---

## File Structure (suggested)

```
cosmo-studio-landing/
├─ app/ (Next.js App Router)
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
├─ components/
│  ├─ LandingNavbar.tsx
│  ├─ HeroSection.tsx
│  ├─ LogoCarousel.tsx
│  ├─ StatsSection.tsx
│  ├─ AboutSection.tsx
│  ├─ FeaturesSection.tsx
│  ├─ TeamSection.tsx
│  ├─ PricingSection.tsx
│  ├─ TestimonialsSection.tsx
│  ├─ BlogSection.tsx
│  ├─ FaqSection.tsx
│  ├─ CTASection.tsx
│  ├─ ContactSection.tsx
│  ├─ LandingFooter.tsx
│  ├─ LandingThemeCustomizerTrigger.tsx
│  └─ LandingThemeCustomizer.tsx
├─ lib/
│  └─ analytics.ts
├─ constants/
│  └─ constants.ts
├─ public/
│  └─ images/
└─ tailwind.config.js
```

---

## Mandatory Component Architecture

**Main layout JSX (must be followed exactly):**

```jsx
<>
  {/* Navigation - Fixed/Sticky with Glassmorphism */}
  <LandingNavbar />

  <main>
    {/* High Impact Hero with Download Buttons */}
    <HeroSection />

    {/* Infinite scroll of supported provider logos (OpenAI, Meta, etc.) */}
    <LogoCarousel />

    {/* Performance metrics (e.g., "0ms Latency", "10+ Providers") */}
    <StatsSection />

    {/* The "Why Cosmo Studio" story */}
    <AboutSection />

    {/* Grid layout distinguishing "Now Available" vs "Roadmap" */}
    <FeaturesSection />

    {/* Maker/Dev team profiles */}
    <TeamSection />

    {/* Free vs Power User License */}
    <PricingSection />

    {/* Social proof/User tweets */}
    <TestimonialsSection />

    {/* Latest updates */}
    <BlogSection />

    {/* Technical questions (API keys, privacy, etc.) */}
    <FaqSection />

    {/* Final "Download Now" push */}
    <CTASection />

    {/* Links and socials */}
    <ContactSection />
  </main>

  {/* Standard Footer */}
  <LandingFooter />

  {/* Dynamic Theme Switching UI */}
  <LandingThemeCustomizerTrigger onClick={() => setThemeCustomizerOpen(true)} />
  <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
</>
```

**Important:** keep component names and order EXACT as above. The outer fragment is the root of the page.

---

## constants.ts (structure example)

* Export typed arrays/objects for:

  * `SUPPORTED_PROVIDERS` — logos + alt text + id
  * `FEATURES_LIVE` — title, description, icon, badges
  * `FEATURES_ROADMAP` — title, description, status = "beta" | "coming"
  * `TESTIMONIALS` — name, handle, quote, avatar
  * `FAQS` — q/a pairs
  * `TEAM` — name, role, social links

> Copilot should scaffold `constants/constants.ts` with TypeScript types and a handful of sample entries to be used by components.

---

## Component Implementation Hints

* **LandingNavbar.tsx**

  * Sticky top, glassmorphism (`backdrop-blur`, `bg-white/5` in dark mode), compact logo, download links (macOS / Windows / Linux), CTA `Get Cosmo Studio` primary button.
  * Keyboard accessible: `nav` landmark and `aria-label`.

* **HeroSection.tsx**

  * Headline: `Your All-in-One AI Command Center.`
  * Subheadline: `Chat with GPT, Claude, and local Ollama models in one native app. Bring your own keys. Own your data.`
  * Download buttons for macOS / Windows / Linux (use platform icons).
  * Visual mockup: use a rotated 3D-looking card with a code/chat stream snippet. Use `perspective` + `transform` + Framer Motion entrance animation.

* **LogoCarousel.tsx**

  * Infinite horizontal marquee style using CSS animation or Framer Motion loop.
  * Monochrome SVGs that `filter: grayscale(1)` and `opacity: 0.6` by default; `hover` lights up (remove grayscale, scale up slightly).

* **FeaturesSection.tsx**

  * Two-column grid: left column `Now Available`, right column `Roadmap`.
  * Live features styled as cards in a bento grid; roadmap items with a distinct "Beta" badge and subdued background.

* **LandingThemeCustomizer.tsx**

  * A floating panel (dialog) with color accent previews (Blue, Violet, Orange).
  * Changing accent updates a CSS variable or Tailwind `data-theme` attribute. Include small preview of the page's primary components.

* **StatsSection.tsx**

  * Small stat cards: e.g., `0ms Latency (local)`, `10+ Providers`, `Privacy First`.

* **Accessibility**

  * Ensure all images have `alt`, interactive elements have keyboard focus states, and color contrast passes WCAG AA in dark mode.

---

## Copilot Prompts / Snippets

Use these prompts when generating components:

* "Generate a responsive `HeroSection.tsx` in TypeScript + Tailwind for a dark-first SaaS landing page. Include headline, subheadline, mac/windows/linux download buttons, and a tilted 3D mockup placeholder. Export default component. Use Framer Motion for entrance animation. Use Shadcn `Button` for CTA. Pull copy from constants file."

* "Scaffold `LogoCarousel.tsx` that horizontally loops provider logos from `constants.ts`, uses `aria-hidden` for decorative images, and lights logos on hover."

* "Create `FeaturesSection.tsx` showing `FEATURES_LIVE` and `FEATURES_ROADMAP` arrays from `constants.ts`. Use a card grid and a Beta badge for roadmap items."

* "Produce `LandingThemeCustomizer.tsx` that toggles CSS custom properties `--accent` between three values and persists selection to `localStorage`. Show a trigger button `LandingThemeCustomizerTrigger.tsx` that opens the panel."

---

## Styling & Tailwind Notes

* Use **dark** mode by default: `html`/`body` should initialize `class="dark"`.
* Base colors: `bg-zinc-900`, `text-zinc-100`, accents: `indigo-500`, `violet-500`.
* For glassmorphism: `bg-white/5 backdrop-blur-md border border-white/6` in dark mode.
* Use container breakpoints: `sm`, `md`, `lg`, `xl`, `2xl` for responsive layout.

---

## Accessibility & SEO

* Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
* Provide meaningful `alt` text for logos and images.
* Use `rel="nofollow noopener noreferrer"` for external download links that open in new tabs.
* Provide meta tags in `app/head.tsx` for description, og:image, and twitter card.

---

## Testing & Developer Hints

* Include small storybook-style `stories` (optional) or `__tests__` to validate rendering of main sections.
* Add a sample unit test to ensure `constants.ts` data shapes match component prop types.
* Add `prefers-reduced-motion` checks when using Framer Motion.

---

## Microcopy Recommendations (for conversions)

* Hero CTA: `Download Cosmo Studio — Bring Your Own Key`.
* Small privacy note near download: `We never see your messages. You bring the API keys.`
* Pricing CTA: `Start for free → Upgrade anytime`.

---

## Replacement & Production Notes

* Replace placeholder SVGs and mockup PNGs in `public/images` with polished assets.
* Hook real analytics (PostHog/ Plausible) via `lib/analytics.ts`.
* For updates/blog, plug in a simple markdown-driven system or a headless CMS.

---

## Final Checklist for Copilot

* [ ] Scaffold project structure (Next.js app) with `tailwind.config.js`.
* [ ] Create `constants/constants.ts` with types and sample data.
* [ ] Implement components matching the exact hierarchy and file names above.
* [ ] Ensure all components are responsive and accessible.
* [ ] Implement Theme Customizer that persists choice.
* [ ] Add Framer Motion animations with `prefers-reduced-motion` support.
* [ ] Document where to swap in production assets and keys.

---

**Authoring note:** Keep the implementation production-minded but scaffolded for rapid iteration. Use small, focused components and keep logic colocated where it helps readability.

---
