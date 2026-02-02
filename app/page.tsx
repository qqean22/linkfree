import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal max-w-3xl mx-auto leading-tight animate-fade-in">
          Create your linktree-like website
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-taupe max-w-xl mx-auto leading-relaxed animate-slide-up">
          One link. Your links. Your brand. Self-hosted and connected to your own database.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up">
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-darkBrown text-cream font-semibold hover:bg-taupe transition-colors duration-200 shadow-lg"
          >
            Create your page
          </Link>
          <Link
            href="/studio/studio1"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-beige text-charcoal font-semibold hover:border-darkBrown hover:bg-beige/30 transition-colors duration-200"
          >
            View example
          </Link>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-beige/60 bg-cream/50">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            <div className="text-center sm:text-left space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pastelMint text-charcoal text-xl font-bold">
                1
              </div>
              <h2 className="text-lg font-semibold text-charcoal">Your data</h2>
              <p className="text-taupe text-sm leading-relaxed">
                Pages and links live in your database. Full control, no lock-in.
              </p>
            </div>
            <div className="text-center sm:text-left space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pastelBlue text-charcoal text-xl font-bold">
                2
              </div>
              <h2 className="text-lg font-semibold text-charcoal">One link</h2>
              <p className="text-taupe text-sm leading-relaxed">
                Share a single URL. Visitors see your name, bio, and all your links in one place.
              </p>
            </div>
            <div className="text-center sm:text-left space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pastelPink text-charcoal text-xl font-bold">
                3
              </div>
              <h2 className="text-lg font-semibold text-charcoal">Self-hosted</h2>
              <p className="text-taupe text-sm leading-relaxed">
                Deploy on Vercel or any host. Your branding, your domain, your rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-beige/60">
        <p className="text-sm text-taupe/70">
          Powered by{' '}
          <a
            href="/"
            className="font-semibold text-darkBrown hover:underline transition-colors"
          >
            LinkFree
          </a>
        </p>
      </footer>
    </main>
  )
}
