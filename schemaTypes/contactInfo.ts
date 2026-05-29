import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      validation: (Rule) => Rule.min(10),
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
      validation: (Rule) => Rule.min(10),
    }),
    defineField({
      name: 'agentFax',
      title: 'Agent Fax',
      type: 'string',
    }),
  ],
})
