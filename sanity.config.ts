import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'PERSONAL-WEBSITE-CMS',

  projectId: 'oj81eb10',
  dataset: 'production',

  basePath: "/edit",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
