import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl font-bold text-charcoal">404</h1>
        <p className="text-xl text-taupe">Studio not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-darkBrown text-cream font-semibold hover:bg-taupe transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}

