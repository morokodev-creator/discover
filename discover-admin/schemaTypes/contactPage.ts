import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Título Principal (Hero)',
      type: 'string',
      initialValue: 'CONTÁCTANOS',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo (Hero)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroBackground',
      title: 'Imagen de Fondo (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Título de Sección',
      type: 'string',
      initialValue: 'ESTAMOS PARA AYUDARTE',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Descripción de Sección',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sideImage',
      title: 'Imagen Lateral',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactCards',
      title: 'Tarjetas de Contacto',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ícono',
              type: 'string',
              options: {
                list: [
                  { title: 'Teléfono Fijo', value: 'phone' },
                  { title: 'Celular / WhatsApp', value: 'mobile' },
                  { title: 'Ubicación (Pin)', value: 'pin' },
                ],
              },
            }),
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'details', title: 'Detalles (soporta saltos de línea)', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
  ],
})