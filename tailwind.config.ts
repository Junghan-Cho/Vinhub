const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0b10',
        surface: '#111119',
        primary: {
          DEFAULT: '#4b1736', // deep burgundy
          soft: '#7a254f',
        },
        accent: {
          DEFAULT: '#d3a85a', // gold
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config

