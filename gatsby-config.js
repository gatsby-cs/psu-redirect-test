module.exports = {
  pathPrefix: '/news',
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: 'gatsby-plugin-gatsby-cloud',
    options: {
      disablePreviewUI: true,
      mergeSecurityHeaders: true,
    },
  },],
}
