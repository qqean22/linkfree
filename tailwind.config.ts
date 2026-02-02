import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      colors: {
        // Custom color palette from design
        charcoal: '#2C2C2C',      // Dark charcoal gray
        cream: '#FAF8F3',          // Off-white/cream
        darkBrown: '#5D4E37',      // Dark brown/deep taupe
        beige: '#D4C4A8',          // Light beige/pale tan
        taupe: '#8B7D6B',          // Medium taupe/light brown-gray
        // Whimsical / event page pastels (Daisy-style)
        pastelPink: '#F5E6EC',
        pastelLavender: '#E8E0F0',
        pastelMint: '#E2EDE6',
        pastelBlue: '#E0E8F2',
        pastelYellow: '#FBF0D9',
        pastelCoral: '#F5E0DC',
      },
      backgroundImage: {
        'grid-paper': `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

