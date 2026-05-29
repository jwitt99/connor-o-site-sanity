import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '75fe0b7u',
    dataset: 'production'
  },
  deployment: {
     appId: 'lhbl047jbcxh4d7kw55z3ew7',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
