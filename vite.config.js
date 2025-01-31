import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),],
// })


export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [react(),tailwindcss(),],
});