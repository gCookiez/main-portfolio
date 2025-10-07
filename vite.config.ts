import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    base: "/main-portfolio/",
    define: {
      '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
      // 'process.env.__WEATHER_API__': JSON.stringify(process.env.VITE_WEATHER_API)
    }
  }
})
