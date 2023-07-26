const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/oiva/oiva.github.io/' : '',
  images: {
    unoptimized: true,
  },
}
