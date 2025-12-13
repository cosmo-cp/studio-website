
'use client';

import { LandingNavbar } from '@/components/landing-navbar';
import { HeroSection } from '@/components/hero-section';
import { LogoCarousel } from '@/components/logo-carousel';
import { StatsSection } from '@/components/stats-section';
import { AboutSection } from '@/components/about-section';
import { FeaturesSection } from '@/components/features-section';
import { TeamSection } from '@/components/team-section';
import { PricingSection } from '@/components/pricing-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { BlogSection } from '@/components/blog-section';
import { FaqSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { ContactSection } from '@/components/contact-section';
import { LandingFooter } from '@/components/landing-footer';

export function LandingPageContent() {
  return (
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
        {/* <TeamSection /> */}

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
    </>
  );
}
