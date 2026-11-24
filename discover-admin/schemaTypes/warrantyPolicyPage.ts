import { defineField, defineType } from 'sanity'

export const warrantyPolicyPage = defineType({
  name: 'warrantyPolicyPage',
  title: 'Política de Garantías',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'heroTitle',
      title: 'Título (Hero)',
      type: 'string',
      initialValue: 'POLÍTICA DE GARANTÍAS',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo (Hero)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Fondo (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),

    // FAQ (ACORDEÓN)
    defineField({
      name: 'faqs',
      title: 'Preguntas Frecuentes (Acordeón)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Pregunta', type: 'string' }),
            defineField({ name: 'answer', title: 'Respuesta', type: 'text', rows: 4 }),
          ],
        },
      ],
    }),

    // BANNER DE DESCARGA PDF
    defineField({
      name: 'bannerImage',
      title: 'Imagen de Fondo (Banner)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bannerText',
      title: 'Texto del Banner',
      type: 'string',
      initialValue: 'Descarga nuestra póliza de garantía completa',
    }),
    defineField({
      name: 'bannerButtonText',
      title: 'Texto del Botón',
      type: 'string',
      initialValue: 'Descargar PDF',
    }),
    defineField({
      name: 'pdfFile',
      title: 'Documento PDF',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
})