import { defineConfig } from 'vite';
export default defineConfig({
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

