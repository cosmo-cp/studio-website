'use client';

import { SUPPORTED_PROVIDERS } from '@/constants/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LogoCarousel() {
  return (
    <section className="py-15 border-y border-white/5 bg-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm text-muted-foreground font-medium">Powering your workflow with top-tier models</p>
      </div>
      
      <div className="flex overflow-hidden mask-image-linear-gradient">
        <motion.div 
          className="flex gap-16 items-center pr-16"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS].map((provider, index) => (
            <div
              key={`${provider.id}-${index}`}
              className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer min-w-max"
            >
               <div className="relative h-8 w-8">
                  <Image 
                    src={provider.logo} 
                    alt={provider.name} 
                    fill 
                    className="object-contain dark:invert"
                  />
               </div>
               <span className="text-3xl font-semibold tracking-tight">{provider.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
