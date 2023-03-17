export default {
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
        auto: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'multiColor',
    //   title: 'Multi Color',
    //   type: 'boolean',
    //   initialValue: false,
    // },
    // {
    //   name: 'defaultColor',
    //   title: 'Default Color',
    //   type: 'string',
    //   hidden: ({parent, value}) => parent?.multiColor == true,
    // },
    // {
    //   name: 'color',
    //   title: 'Color',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   hidden: ({parent, value}) => parent?.multiColor == false,
    // },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'string'}],
      // fields: [
      //   {name: 'street', type: 'string', title: 'Street name'},
      //   {name: 'streetNo', type: 'string', title: 'Street number'},
      //   {name: 'city', type: 'string', title: 'City'},
      // ],
    },
    // {
    //   name: 'isSizesAvailable',
    //   title: 'Sizes Available',
    //   type: 'boolean',
    //   initialValue: false,
    // },
    // {
    //   name: 'defaultSize',
    //   title: 'Default Size',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'XS', value: 'XS'},
    //       {title: 'SM', value: 'SM'},
    //       {title: 'MD', value: 'MD'},
    //       {title: 'LG', value: 'LG'},
    //       {title: 'XL', value: 'XL'},
    //     ],
    //   },
    //   hidden: ({parent, value}) => parent?.isSizesAvailable == true,
    // },
    // {
    //   name: 'sizes',
    //   title: 'Sizes',
    //   type: 'object',
    //   hidden: ({parent, value}) => parent?.isSizesAvailable == false,
    //   fields: [
    //     {
    //       name: 'xs',
    //       title: 'XS',
    //       type: 'boolean',
    //     },
    //     {
    //       name: 'sm',
    //       title: 'SM',
    //       type: 'boolean',
    //     },
    //     {
    //       name: 'md',
    //       title: 'MD',
    //       type: 'boolean',
    //     },
    //     {
    //       name: 'lg',
    //       title: 'LG',
    //       type: 'boolean',
    //     },
    //     {
    //       name: 'xl',
    //       title: 'XL',
    //       type: 'boolean',
    //     },
    //   ],
    //   initialValue: {
    //     xs: false,
    //     sm: false,
    //     md: false,
    //     lg: false,
    //     xl: false,
    //   },
    // },
    // {
    //   title: 'Example object list',
    //   type: 'array',
    //   name: 'example',
    //   of: [
    //     {
    //       type: 'object',
    //       name: 'inline',
    //       fields: [
    //         {type: 'boolean', name: 'title'},
    //         {type: 'number', name: 'amount'},
    //       ],
    //     },
    //   ],
    //   // options: {
    //   //   list: [
    //   //     {_type: 'inline', title: 'Big amount', amount: 100},
    //   //     {_type: 'inline', title: 'Small amount', amount: 1},
    //   //   ],
    //   // },
    // },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'XS', value: 'XS'},
          {title: 'SM', value: 'SM'},
          {title: 'MD', value: 'MD'},
          {title: 'LG', value: 'LG'},
          {title: 'XL', value: 'XL'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    // {
    //   name: 'inStock',
    //   title: 'In Stock',
    //   // type: 'reference',
    //   type: 'number',
    //   options: {
    //     list: [
    //       {title: 'XS', value: 'SM'},
    //       // {title: 'SM', value: 'SM'},
    //       // {title: 'MD', value: 'MD'},
    //       // {title: 'LG', value: 'LG'},
    //       // {title: 'XL', value: 'XL'},
    //     ],
    //   },
    // },
  ],
}
