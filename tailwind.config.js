/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    borderRadius: {
      xs: 3,
      s: 6,
      m: 10,
      l: 16,
      xl: 24,
      full: 9999,
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      light: '#FFFCF9',
      dark: '#171A20',
      transparent: 'transparent',
      warning: '#FF923B',
      success: '#228C59',
      danger: '#AE3232',
      disabled: '#E1DCDC',
      grey: {
        classic: '#3F434A',
        strong: '#868383',
        weak: '#F2F2F2',
      },
      primary: {
        strong: '#9E768F',
        classic: '#6C464F',
      },
      secondary: {
        electric: '#9FA4C4',
        classic: '#B3CDD1',
      },
      shadowColor: '#dcdce1',
    },
    spacing: {
      xxs: 4,
      xs: 8,
      s: 12,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 64,
    },
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
