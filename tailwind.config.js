/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Dark gradient with a slight blur effect
        'gradient-radial-dark': 'radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
        
        // Dark conic gradient with subtle light accents
        'gradient-conic-dark':
          'conic-gradient(from 180deg at 50% 50%, rgba(45, 45, 45, 0.7), rgba(50, 50, 50, 0.8))',

        // Dark textured background with gradient overlay
        'gradient-texture-dark':
          'url("/path/to/dark-pattern.png"), linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(60, 60, 60, 0.7))',
        
        // A darker moody gradient
        'moody-dark-gradient':
          'linear-gradient(180deg, rgba(34, 34, 34, 0.85), rgba(0, 0, 0, 1))',
      },
      colors: {
        // Dark colors for the background
        darkGray: '#1E1E1E',
        deepBlue: '#0F172A',
        charcoal: '#2C3E50',
      },
    },
  },
  plugins: [],
}
