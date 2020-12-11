const nextTranslate = require('next-translate');
const withMDX = require('@next/mdx')();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextTranslate(withBundleAnalyzer(withMDX()));
