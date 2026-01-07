import { notFound } from 'next/navigation'
import StudioPage from '@/components/StudioPage'
import linksData from '@/data/links.json'
import type { LinksData } from '@/types/links'

const data = linksData as LinksData

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const studios = Object.keys(data.studios)
  return studios.map((slug) => ({
    slug,
  }))
}

export default function Studio({ params }: PageProps) {
  const { slug } = params
  const studio = data.studios[slug]

  if (!studio) {
    notFound()
  }

  return <StudioPage profile={studio.profile} links={studio.links} />
}

