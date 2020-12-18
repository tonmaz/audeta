module.exports = {
  locales: ['en', 'ca'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/404': ['error'],
    '/': ['home'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/translations/${namespace}_${locale}`).then((m) => m.default),
};
