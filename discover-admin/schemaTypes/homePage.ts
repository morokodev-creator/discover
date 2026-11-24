import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'heroTitle',
      title: 'Título Principal (Hero)',
      type: 'string',
      initialValue: 'Descubre la Discover 125 ST',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo (Hero)',
      type: 'text',
      rows: 2,
      initialValue: 'La herramienta definitiva para potenciar tu trabajo y cuidar tu bolsillo.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Fondo (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Texto del Botón (Hero)',
      type: 'string',
      initialValue: 'Cotizar ahora',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Enlace del Botón (Hero)',
      type: 'string',
      initialValue: '/contacto',
    }),

    // BANDA DE CONFIANZA
    defineField({
      name: 'trustItems',
      title: 'Banda de Confianza',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Texto', type: 'string' }),
            defineField({
              name: 'icon',
              title: 'Ícono',
              type: 'string',
              options: {
                list: [
                  { title: 'Escudo (Garantía)', value: 'shield' },
                  { title: 'Engranaje (Repuestos)', value: 'gear' },
                  { title: 'Herramienta (Talleres)', value: 'wrench' },
                ],
              },
            }),
          ],
        },
      ],
    }),

    // SECCIÓN HECHA PARA EL DELIVERY
    defineField({
      name: 'deliveryTitle',
      title: 'Título Sección Delivery',
      type: 'string',
      initialValue: 'Hecha para el Delivery',
    }),
    defineField({
      name: 'deliveryCards',
      title: 'Tarjetas de Beneficios (3 tarjetas)',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Foto Detalle',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'deliveryCtaText',
      title: 'Texto Botón Inferior',
      type: 'string',
      initialValue: 'Encuentra tu distribuidor',
    }),
    defineField({
      name: 'deliveryCtaLink',
      title: 'Enlace Botón Inferior',
      type: 'string',
      initialValue: '/distribuidores',
    }),
  ],
})