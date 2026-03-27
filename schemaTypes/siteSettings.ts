import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'profileName',
      title: 'Profile Name',
      type: 'string',
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'agentName',
      title: 'Agent Name',
      type: 'string',
    }),
    defineField({
      name: 'agentBuilding',
      title: 'Agent Building',
      type: 'string',
    }),
    defineField({
      name: 'agentAddress',
      title: 'Agent Address',
      type: 'string',
    }),
    defineField({
      name: 'agentCity',
      title: 'Agent City',
      type: 'string',
    }),
    defineField({
      name: 'agentState',
      title: 'Agent State',
      type: 'string',
    }),
    defineField({
      name: 'agentZip',
      title: 'Agent Zip',
      type: 'string',
    }),
    defineField({
      name: 'agentCountry',
      title: 'Agent Country',
      type: 'string',
    }),
    defineField({
      name: 'agentPhone',
      title: 'Agent Phone',
      type: 'string',
    }),
    defineField({
      name: 'agentFax',
      title: 'Agent Fax',
      type: 'string',
    }),
  ],
})
