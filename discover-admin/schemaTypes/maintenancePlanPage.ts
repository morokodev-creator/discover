import { defineField, defineType } from 'sanity'

export const maintenancePlanPage = defineType({
  name: 'maintenancePlanPage',
  title: 'Plan de Mantenimiento',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'heroTitle',
      title: 'Título (Hero)',
      type: 'string',
      initialValue: 'PLAN DE MANTENIMIENTO',
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

    // CONTENIDO Y CUADRO
    defineField({
      name: 'contentTitle',
      title: 'Título de la Sección',
      type: 'string',
      initialValue: 'Cronograma de Servicios',
    }),
    defineField({
      name: 'contentDescription',
      title: 'Texto Explicativo',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'maintenanceRows',
      title: 'Filas del Cuadro de Mantenimiento',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'service', title: 'Servicio (ej: 1er Servicio)', type: 'string' }),
            defineField({ name: 'kilometers', title: 'Kilometraje (ej: 500 - 750 km)', type: 'string' }),
            defineField({ name: 'time', title: 'Tiempo (ej: 30 días)', type: 'string' }),
            defineField({ name: 'details', title: 'Trabajos / Observaciones', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
  ],
})