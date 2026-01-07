# LinkFree

A beautiful, self-hosted link tree alternative built with Next.js and deployed on Vercel.

## Features

- 🚀 **Fast & Reactive** - Built with Next.js 14 and optimized for performance
- 🎨 **Beautiful Design** - Custom color palette with smooth animations
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Minimal Tech Stack** - Next.js, TypeScript, and Tailwind CSS
- 🔧 **Easy to Customize** - Edit `data/links.json` to add your links

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Edit your links in `data/links.json`:
```json
{
  "profile": {
    "name": "Your Name",
    "bio": "Your bio",
    "avatar": "https://example.com/avatar.jpg"
  },
  "links": [
    {
      "title": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "💻"
    }
  ]
}
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your LinkFree is live! 🎉

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `charcoal` - Dark charcoal gray
- `cream` - Off-white/cream
- `darkBrown` - Dark brown/deep taupe
- `beige` - Light beige/pale tan
- `taupe` - Medium taupe/light brown-gray

### Links

All links are stored in `data/links.json`. Simply add, remove, or modify entries to update your link tree.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting

## License

MIT

