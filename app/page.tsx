import Link from 'next/link'
import linksData from '@/data/links.json'
import type { LinksData } from '@/types/links'

const data = linksData as LinksData

export default function Home() {
  const studios = Object.entries(data.studios)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal">
            LinkFree
          </h1>
          <p className="text-lg text-taupe max-w-md mx-auto">
            Select a studio to view links
          </p>
        </div>

        {/* Studios List */}
        <div className="space-y-4">
          {studios.map(([slug, studio], index) => (
            <Link
              key={slug}
              href={`/studio/${slug}`}
              className="block animate-slide-up"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              <div className="group relative block w-full max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out border-2 border-beige shadow-lg bg-gradient-to-br from-cream to-beige hover:from-beige hover:to-taupe/10 hover:border-darkBrown hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="font-semibold text-lg text-charcoal group-hover:text-darkBrown transition-colors duration-200">
                        {studio.profile.name}
                      </span>
                    </div>
                    <svg
                      className="flex-shrink-0 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  {studio.profile.bio && (
                    <p className="mt-2 text-sm text-taupe line-clamp-2">
                      {studio.profile.bio}
                    </p>
                  )}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-darkBrown transition-all duration-300 ease-out w-0 group-hover:w-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 animate-fade-in">
          <p className="text-sm text-taupe/70">
            Powered by{' '}
            <a
              href="https://linkfree.win"
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
