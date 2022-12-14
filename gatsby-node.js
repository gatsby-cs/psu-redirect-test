require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const redirects = [
  {
    path: '/test',
    toPath: '/some-test',
    statusCode: 302
  },
  {
    path: '/test-trailing-slash/',
    toPath: '/second-test-slash/',
    statusCode: 302
  }
]

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  let redirectPrefix = process.env.REDIRECT_PREFIX;
  // unless we are in preview, then unset.
  if (process.env.GATSBY_IS_PREVIEW === 'true') {
    redirectPrefix = '';
  }

  redirects.forEach((node) => {
    // Redirect paths must start with a slash, so it is added if needed.
    const settings = {
      redirectInBrowser: false,
      fromPath: node.path.startsWith('/')
        ? node.path
        : `/${node.path}`,
      toPath: node.toPath.startsWith('/') ? redirectPrefix + node.toPath : `${redirectPrefix}/${node.toPath}`,
    };

    createRedirect(settings);

  })
}