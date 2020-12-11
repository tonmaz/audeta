const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'en-US', 'de'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
