import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      description: 'e.g., "2024 - Acting Resume" or "Tech Resume"',
    }),
    defineField({
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Set as the current active resume, if multiple are active displays the most recent one',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Active First, Then Upload Date',
      name: 'activeAndDate',
      by: [
        {field: 'isActive', direction: 'desc'},
        {field: 'uploadDate', direction: 'desc'},
      ],
    },
  ],
})
