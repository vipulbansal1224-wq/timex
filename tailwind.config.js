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
          950: '#0B0F19',
          900: '#111827',
          850: '#151E32',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        brand: {
          amber: '#F59E0B',
          gold: '#D97706',
          yellow: '#FBBF24',
          bronze: '#B45309',
          dark: '#0B0F19',
          steel: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-pattern': "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)",
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
