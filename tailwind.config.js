/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Named colors from your Figma spec / CSS variables
        'soft-white': '#F4F7E0',
        'text-dark': '#1A1A1A',

        // If you want to use CSS variables (optional)
        'collection-1-DARK-background-grey': 'var(--collection-1-DARK-background-grey)',
        'collection-1-text-dark': 'var(--collection-1-text-dark)',
      },
    },
  },
  plugins: [],
};
