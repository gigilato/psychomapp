/** @type {import('tailwindcss').Config} */
import { borderRadius, colors, spacing } from './src/shared/theme'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    borderRadius,
    colors,
    spacing,
    screens: {
      sm: '390px',
      md: '700px',
      lg: '624px',
      xl: '1080px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
