/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs:'400px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'opaque':'opaque 2s linear '
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      keyframes:{
        opaque:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        }
      },
      maxHeight: {
        'custom-xs': 'calc(65vh - 3rem)', // Assuming this calculation
        'custom-lg': 'calc(65vh - 3rem)', // Example for `lg` with a different value
      },
      fontSize: {
        'blog-h1': '30px',        // Custom font size for desktop
        'blog-h1-xs': '15px',     // Custom font size for mobile
      }

    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
