const defaultTheme = require('tailwindcss/defaultTheme')

const remCalc = (value, base = 16) => {
  return `${value / base}rem`
}

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  },
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      gray: 'var(--color-gray)',
      lGray: 'var(--color-light-gray)',
      danger: 'var(--color-danger)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      bg: 'var(--color-bg)',
      text: 'var(--color-text)',
      card: 'var(--color-card)',
      footer: 'var(--color-footer)',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      tiny: remCalc(10),
      xs: remCalc(12),
      sm: remCalc(14),
      base: remCalc(16),
      lg: remCalc(20),
      xl: remCalc(24),
      '2xl': remCalc(30),
      '3xl': remCalc(40),
      '4xl': remCalc(60),
      '5xl': remCalc(80),
    },
    container: {
      padding: {
        DEFAULT: remCalc(32),
        xl: remCalc(90),
      },
    },
    extend: {
      screens: {
        xxl: remCalc(1600),
      },
    },
  },
  variants: {},
  plugins: [],
}
