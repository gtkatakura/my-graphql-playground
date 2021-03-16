const path = require('path')

/**
 * @type import('relay-compiler/lib/bin/RelayCompilerMain').Config
 */
module.exports = {
  src: path.resolve(__dirname, './src'),
  schema: path.resolve(__dirname, './__generated__/schema.graphql'),
  language: 'typescript',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  noFutureProofEnums: true,
}
