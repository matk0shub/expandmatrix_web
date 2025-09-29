import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { Users } from './src/payload/collections/Users'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET!,
  admin: {
    user: 'users',
  },
  editor: lexicalEditor({}),
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
})
