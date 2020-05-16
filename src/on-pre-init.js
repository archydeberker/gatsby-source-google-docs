const fs = require("fs-extra")
const path = require("path")

const NODE_MODULES_CACHE = path.join(
  process.cwd(),
  "node_modules/.cache/gatsby-source-google-docs"
)
const GATSBY_CACHE = path.join(
  process.cwd(),
  ".cache/caches/gatsby-source-google-docs"
)

exports.onPreInit = async ({reporter}) => {
  if (fs.existsSync(NODE_MODULES_CACHE)) {
    reporter.log("onPreInit: Copying gatsby-source-google-docs cache to .cache")

    await fs.copy(NODE_MODULES_CACHE, GATSBY_CACHE)
  }
}
