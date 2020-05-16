const path = require("path")

const CACHE_PATH = path.join(
  process.cwd(),
  "node_modules/.cache/gatsby-source-google-docs"
)
const TOKEN_PATH = path.join(CACHE_PATH, "token.json")

exports.CACHE_PATH = CACHE_PATH
exports.TOKEN_PATH = TOKEN_PATH
