import { defineField, defineType } from 'sanity'

export const dealer = defineType({
  name: 'dealer',
  title: 'Distribuidores',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Distribuidor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Servicios Disponibles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Ventas', value: 'Ventas' },
          { title: 'Repuestos', value: 'Repuestos' },
          { title: 'Servicios', value: 'Servicios' },
        ],
      },
    }),
    defineField({
      name: 'lat',
      title: 'Latitud (Mapa)',
      type: 'number',
      description: 'Ejemplo: -12.1121',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lng',
      title: 'Longitud (Mapa)',
      type: 'number',
      description: 'Ejemplo: -77.0185',
      validation: (Rule) => Rule.required(),
    }),
  ],
})