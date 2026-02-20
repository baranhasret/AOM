/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bordo: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9b8',
          400: '#ec7a93',
          500: '#d9496a',
          600: '#9B2335',
          700: '#862030',
          800: '#711d2b',
          900: '#611b28',
          950: '#360a13',
        },
      },
    },
  },
  plugins: [],
};
