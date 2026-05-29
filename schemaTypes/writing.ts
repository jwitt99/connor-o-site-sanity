import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'writing',
  title: 'Writing',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort writings (lower numbers appear first)',
      initialValue: async (_, context) => {
        const {getClient} = context
        const client = getClient({apiVersion: '2024-03-26'})
        
        const query = `*[_type == "writing"] | order(order desc)[0].order`
        const maxOrder = await client.fetch(query)
        
        return maxOrder != null ? maxOrder + 1 : 1
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'writers',
      title: 'Writers',
      type: 'string',
    }),
    defineField({
      name: 'extraInfo',
      title: 'Extra Information',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'linkType',
          title: 'Link Type',
          type: 'string',
          options: {
            list: [
              {title: 'URL', value: 'url'},
              {title: 'Image', value: 'image'},
            ],
            layout: 'radio',
          },
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          hidden: ({parent}) => parent?.linkType !== 'url',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({parent}) => parent?.linkType !== 'image',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
