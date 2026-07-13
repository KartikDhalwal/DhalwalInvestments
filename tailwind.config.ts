// tailwind.config.ts

import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b18',
          900: '#0a1730',
          800: '#0f2247',
          700: '#16305e',
        },
        gold: {
          500: '#c9a227',
          400: '#e0be4e',
        },
        ink: {
          DEFAULT: '#0b0f19',
          muted: '#5b6472',
        },
        paper: '#ffffff',
        surface: '#f6f7fa',
      },
    },
  },
  plugins: [animate],
}
export default config
