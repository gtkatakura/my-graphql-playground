import 'make-promises-safe'
import path from 'path'
import fs from 'fs/promises'

import { buildClientSchema, buildSchema, print, printSchema } from 'graphql'
import { mergeSchemas, mergeTypeDefs } from '@graphql-tools/merge'
import chalk from 'chalk'

const main = async () => {
  const rootDir = path.resolve(__dirname, '..')

  const downloadedDir = path.resolve(rootDir, './src/__downloaded__')
  const generatedDir = path.resolve(rootDir, './src/__generated__')

  const schemasPath = await fs.readdir(downloadedDir)

  const schemas = await Promise.all(
    schemasPath.map(async schemaPath => {
      // const schemaString = await fs.readFile(
      //   path.resolve(downloadedDir, schemaPath),
      //   { encoding: 'utf-8' }
      // )

      // const schema = buildClientSchema(JSON.parse(schemaString))

      const destinationFile = path.resolve(
        generatedDir,
        `${path.basename(schemaPath, '.json')}.graphql`
      )

      const typeDefs = await fs.readFile(destinationFile, {
        encoding: 'ascii'
      })

      console.log(typeDefs)

      return buildSchema(typeDefs)

      // return buildClientSchema(typeDefs)

      // const typeDefs = printSchema(schema)

      // await fs.writeFile(destinationFile, typeDefs)

      // console.info(
      //   `  ${chalk.green('✔')} Generated graphql sdl to ${path.relative(
      //     rootDir,
      //     destinationFile
      //   )}`
      // )

      // return schema
    })
  )

  const schema = mergeSchemas({ schemas })

  const destinationFile = path.resolve(generatedDir, `schema.graphql`)

  await fs.writeFile(destinationFile, printSchema(schema))

  console.info(
    `  ${chalk.green('✔')} Generated graphql sdl to ${path.relative(
      rootDir,
      destinationFile
    )}`
  )
}

main()
