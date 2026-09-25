/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#060B18',
          900: '#0B132B',
          850: '#131D3B',
          800: '#1C2541',
          700: '#2A385B',
          600: '#3A506B',
          500: '#5C7393',
          400: '#8A9DB8',
          100: '#E6EDF5',
          50: '#F4F7FA',
        },
        brand: {
          blue: '#1E640O',
          accent: '#2563EB',
          amber: '#F59E0B',
          gold: '#D97706',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'steel-pattern': "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)",
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
