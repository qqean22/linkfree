import { notFound } from 'next/navigation'
import Link from 'next/link'
import eventsData from '@/data/events.json'

interface PageProps {
  params: { slug: string; eventSlug: string }
}

type EventData = {
  title: string
  tagline: string
  description: string
  details: Array<{ heading: string; body: string; accent: string }>
  cta: string
  backLabel: string
}

type EventsData = {
  [studio: string]: {
    [eventSlug: string]: EventData
  }
}

const data = eventsData as EventsData

export async function generateStaticParams() {
  const params: { slug: string; eventSlug: string }[] = []
  for (const slug of Object.keys(data)) {
    for (const eventSlug of Object.keys(data[slug])) {
      params.push({ slug, eventSlug })
    }
  }
  return params
}

function StickyNote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-block px-4 py-2 rounded-sm bg-pastelYellow border border-charcoal/10 shadow-sm -rotate-2 font-handwritten text-xl text-charcoal ${className}`}>
      {children}
    </div>
  )
}

function DoodleUnderline() {
  return (
    <svg className="inline-block w-24 h-2 -mt-1 ml-1" viewBox="0 0 96 8" fill="none">
      <path d="M2 6Q24 2 48 5T94 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-pastelLavender" />
    </svg>
  )
}

export default function EventPage({ params }: PageProps) {
  const slug = params?.slug
  const eventSlug = params?.eventSlug
  if (!slug || !eventSlug) notFound()

  const studioEvents = data[slug]
  const event = studioEvents?.[eventSlug]
  if (!event) notFound()

  const accentBg: Record<string, string> = {
    pink: 'bg-pastelPink',
    green: 'bg-pastelMint',
    blue: 'bg-pastelBlue',
  }

  return (
    <div className="min-h-screen bg-cream bg-grid-paper bg-grid">
      {/* Back link */}
      <div className="pt-8 pb-4 px-6 max-w-4xl mx-auto">
        <Link
          href={`/studio/${slug}`}
          className="inline-flex items-center gap-2 text-taupe hover:text-darkBrown transition-colors text-sm"
        >
          <span>←</span>
          <span>{event.backLabel}</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-24">
        {/* Hero */}
        <header className="pt-12 pb-20 text-center relative">
          <div className="absolute top-20 right-[10%] opacity-80">
            <StickyNote>what if?</StickyNote>
          </div>
          <div className="absolute top-32 left-[8%] opacity-70 font-handwritten text-2xl text-charcoal/70">
            ✿ cosy vibes
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal max-w-2xl mx-auto leading-tight">
            {event.title}
          </h1>
          <p className="mt-6 text-xl text-taupe max-w-xl mx-auto">
            {event.tagline}
          </p>
          <p className="mt-8 text-lg text-charcoal/80 max-w-lg mx-auto leading-relaxed">
            {event.description}
          </p>
          <div className="mt-6">
            <span className="text-charcoal font-medium">practice eloquence</span>
            <DoodleUnderline />
          </div>
        </header>

        {/* Detail sections - spread out */}
        <div className="space-y-24">
          {event.details.map((block, i) => (
            <section
              key={i}
              className={`rounded-2xl p-8 sm:p-10 ${accentBg[block.accent] || 'bg-pastelPink'} border border-white/60 shadow-sm relative`}
            >
              {i === 1 && (
                <div className="absolute -top-4 right-8 font-handwritten text-2xl text-charcoal/60">
                  what next?
                </div>
              )}
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                {block.heading}
              </h2>
              <p className="text-lg text-charcoal/90 leading-relaxed max-w-xl">
                {block.body}
              </p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center relative">
          <p className="font-handwritten text-3xl sm:text-4xl text-charcoal">
            {event.cta}
          </p>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <span className="text-4xl opacity-80" aria-hidden>🌸</span>
            <span className="text-4xl opacity-80" aria-hidden>✨</span>
            <span className="text-4xl opacity-80" aria-hidden>🕯️</span>
          </div>
          {/* Tiny doodle: flame for “passion” */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-handwritten text-2xl text-charcoal/40">
            bring your passion topic
          </div>
        </div>
      </article>
    </div>
  )
}
