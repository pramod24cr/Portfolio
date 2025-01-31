import { defineConfig } from 'vite';
export default defineConfig({
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      // colors: {
      //   primary: '#1d4ed8', // Change this to match the theme color
      //   secondary: '#9333ea',
      //   background: '#f3f4f6',
      // },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

