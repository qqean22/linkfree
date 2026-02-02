import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

type LinksJson = {
  studios: Record<
    string,
    {
      profile: { name: string; bio: string; avatar: string }
      links: Array<{ title: string; url: string; icon?: string }>
    }
  >
}

async function main() {
  const dataPath = path.join(process.cwd(), 'data', 'links.json')
  const raw = fs.readFileSync(dataPath, 'utf-8')
  const data = JSON.parse(raw) as LinksJson

  for (const [slug, studio] of Object.entries(data.studios)) {
    const page = await prisma.page.upsert({
      where: { slug },
      create: {
        slug,
        name: studio.profile.name,
        bio: studio.profile.bio,
        avatar: studio.profile.avatar ?? '',
      },
      update: {
        name: studio.profile.name,
        bio: studio.profile.bio,
        avatar: studio.profile.avatar ?? '',
      },
    })

    await prisma.link.deleteMany({ where: { pageId: page.id } })
    for (let i = 0; i < studio.links.length; i++) {
      const link = studio.links[i]
      await prisma.link.create({
        data: {
          pageId: page.id,
          title: link.title,
          url: link.url,
          icon: link.icon ?? '',
          sortOrder: i,
        },
      })
    }
  }

  console.log('Seeded pages and links from data/links.json')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
