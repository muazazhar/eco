export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'Sale Time',
      type: 'string',
    },
  ],
}
