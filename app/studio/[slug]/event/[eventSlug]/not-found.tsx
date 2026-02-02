import Link from 'next/link'

export default function EventNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-cream">
      <div className="text-center space-y-6 animate-fade-in">
        <p className="font-handwritten text-4xl text-charcoal">oops — wrong door</p>
        <p className="text-taupe">This event doesn&apos;t exist (yet).</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-darkBrown text-cream font-semibold hover:bg-taupe transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
