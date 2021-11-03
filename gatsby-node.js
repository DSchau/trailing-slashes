exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/about-us',
    toPath: '/about-us/',
    isPermanent: true,
    statusCode: 301
  })
}
