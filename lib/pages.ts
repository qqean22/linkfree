import { getPageBySlug } from './db'
import linksData from '@/data/links.json'
import type { LinksData } from '@/types/links'

const fallbackData = linksData as LinksData

export type PageWithLinks = {
  profile: { name: string; bio: string; avatar: string }
  links: Array<{ title: string; url: string; icon?: string }>
}

/**
 * Get a link page by slug. Tries the database first; falls back to links.json if no DB or no row.
 */
export async function getPage(slug: string): Promise<PageWithLinks | null> {
  try {
    if (!process.env.DATABASE_URL) return getFallbackPage(slug)
    const page = await getPageBySlug(slug)
    if (page) {
      return {
        profile: {
          name: page.name,
          bio: page.bio,
          avatar: page.avatar,
        },
        links: page.links.map((l) => ({
          title: l.title,
          url: l.url,
          icon: l.icon || undefined,
        })),
      }
    }
  } catch {
    // DB not set up or error — use fallback
  }
  return getFallbackPage(slug)
}

function getFallbackPage(slug: string): PageWithLinks | null {
  const studio = fallbackData.studios[slug as keyof typeof fallbackData.studios]
  if (!studio) return null
  return {
    profile: studio.profile,
    links: studio.links,
  }
}

/** Return all slugs for static generation (DB + JSON fallback). */
export async function getAllPageSlugs(): Promise<string[]> {
  const fromJson = Object.keys(fallbackData.studios)
  try {
    if (!process.env.DATABASE_URL) return fromJson
    const { prisma } = await import('./db')
    const pages = await prisma.page.findMany({ select: { slug: true } })
    const fromDb = pages.map((p) => p.slug)
    return [...new Set([...fromDb, ...fromJson])]
  } catch {
    return fromJson
  }
}
