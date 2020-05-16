const fs = require("fs-extra")

exports.onPostBuild = async ({reporter}) => {
  await fs.ensureDir("node_modules/.cache/gatsby-source-google-docs")

  if (fs.existsSync(".cache/gatsby-source-google-docs")) {
    reporter.log(
      "onPostBuild: Copying gatsby-source-google-docs cache to node_modules"
    )
    await fs.copy(
      ".cache/gatsby-source-google-docs",
      "node_modules/.cache/gatsby-source-google-docs"
    )
  }
}
