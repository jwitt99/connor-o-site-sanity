import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: async (_, context) => {
        const {getClient} = context
        const client = getClient({apiVersion: '2024-03-26'})
        
        const query = `*[_type == "galleryItem"] | order(order desc)[0].order`
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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
