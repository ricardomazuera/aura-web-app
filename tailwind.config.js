/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        'spiritual-lavender': '#9E7EB9',
        'gentle-rose': '#E6BBD3',
        'golden-intention': '#F2C94C',
        'ethereal-blue': '#8ECAE6',
      },
    },
  },
  plugins: [],
};