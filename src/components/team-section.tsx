

import { TEAM } from '@/constants/constants';
import { Github, Twitter, Dribbble } from 'lucide-react';
import Link from 'next/link';

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Makers</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {TEAM.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-muted mb-4 overflow-hidden border-2 border-border">
                {/* Placeholder for avatar */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <div className="flex gap-3">
                {member.social.twitter && (
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-4 w-4" />
                  </Link>
                )}
                {member.social.github && (
                  <Link href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                  </Link>
                )}
                {member.social.dribbble && (
                  <Link href={member.social.dribbble} className="text-muted-foreground hover:text-primary transition-colors">
                    <Dribbble className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
