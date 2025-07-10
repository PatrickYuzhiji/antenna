/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#213067",
        accent: "#F39C12",
      },
    },
  },
  // In Tailwind v4, we need to use arbitrary values differently
  safelist: [
    // Primary color (#2C3E50)
    { pattern: /bg-\[#2C3E50\]/ },
    { pattern: /text-\[#2C3E50\]/ },
    { pattern: /border-\[#2C3E50\]/ },
    { pattern: /from-\[#2C3E50\]/ },
    { pattern: /to-\[#2C3E50\]/ },
    { pattern: /via-\[#2C3E50\]/ },
    { pattern: /hover:text-\[#2C3E50\]/ },
    { pattern: /hover:bg-\[#2C3E50\]/ },

    // Accent color (#F39C12)
    { pattern: /bg-\[#F39C12\]/ },
    { pattern: /text-\[#F39C12\]/ },
    { pattern: /border-\[#F39C12\]/ },
    { pattern: /from-\[#F39C12\]/ },
    { pattern: /to-\[#F39C12\]/ },
    { pattern: /via-\[#F39C12\]/ },
    { pattern: /hover:text-\[#F39C12\]/ },
    { pattern: /hover:bg-\[#F39C12\]/ },
    { pattern: /hover:border-\[#F39C12\]/ },
  ],
  plugins: [],
};
