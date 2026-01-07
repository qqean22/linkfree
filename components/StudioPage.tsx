'use client'

import LinkCard from './LinkCard'
import type { Link, Profile } from '@/types/links'

interface StudioPageProps {
  profile: Profile
  links: Link[]
}

export default function StudioPage({ profile, links }: StudioPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        {/* Profile Section */}
        <div className="text-center space-y-4 animate-slide-up">
          {profile.avatar && (
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-darkBrown to-taupe blur-xl opacity-30"></div>
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="relative w-24 h-24 rounded-full border-4 border-beige shadow-lg object-cover"
                />
              </div>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal">
            {profile.name}
          </h1>
          {profile.bio && (
            <p className="text-lg text-taupe max-w-md mx-auto">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              <LinkCard
                title={link.title}
                url={link.url}
                icon={link.icon}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 animate-fade-in">
          <p className="text-sm text-taupe/70">
            Powered by{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-darkBrown hover:underline transition-colors"
            >
              LinkFree
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

