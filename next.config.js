/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    // Otras configuraciones de Next.js...
    swc1ache: {
      navigateFallbackWhitelist: [/^\/(actualidad|conocenos|contacto|productos|sostenibilidad)/],
    },
  }
