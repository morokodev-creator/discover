import { defineField, defineType } from 'sanity'

export const productPage = defineType({
  name: 'productPage',
  title: 'Página Discover 125 ST',
  type: 'document',
  fields: [
    // HERO 50/50
    defineField({
      name: 'heroBadge',
      title: 'Etiqueta Superior (Badge)',
      type: 'string',
      initialValue: 'La favorita del delivery',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título del Modelo',
      type: 'string',
      initialValue: 'Discover 125 ST',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Descripción Principal',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Texto del Botón',
      type: 'string',
      initialValue: 'Cotizar ahora',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Enlace del Botón',
      type: 'string',
      initialValue: '/contacto',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Hero (Derecha)',
      type: 'image',
      options: { hotspot: true },
    }),

    // BARRA QUICK SPECS
    defineField({
      name: 'quickSpecs',
      title: 'Especificaciones Rápidas (Barra de 4 datos)',
      type: 'array',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Valor (ej: 124.6)', type: 'string' }),
            defineField({ name: 'unit', title: 'Unidad (ej: cc, HP, km/g)', type: 'string' }),
            defineField({ name: 'label', title: 'Etiqueta (ej: Cilindrada)', type: 'string' }),
          ],
        },
      ],
    }),

    // DETALLES EN ZIGZAG
    defineField({
      name: 'features',
      title: 'Secciones de Detalle (Zigzag)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
            defineField({
              name: 'bulletPoints',
              title: 'Lista de Puntos Clave (Opcional)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'image',
              title: 'Imagen del Detalle',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),

    // FICHA TÉCNICA (ACORDEONES)
    defineField({
      name: 'specCategories',
      title: 'Ficha Técnica (Acordeones)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'categoryTitle',
              title: 'Nombre de la Categoría (ej: Motor y Transmisión)',
              type: 'string',
            }),
            defineField({
              name: 'specs',
              title: 'Filas de Especificaciones',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Característica (ej: Cilindrada)', type: 'string' }),
                    defineField({ name: 'value', title: 'Detalle (ej: 124.6 cc)', type: 'string' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})