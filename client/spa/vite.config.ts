import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      clientPort: 80,
    },
  },
})