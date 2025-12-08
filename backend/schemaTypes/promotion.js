import { defineType, defineField } from 'sanity'

export const promotion = defineType({
    name: 'promotion',      // The technical ID used in queries
    title: 'Promotion',     // The display name for the Studio
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Campaign Title',
            description: 'Internal title to identify this promotion.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Active Status',
            description: 'Toggle to show/hide this promotion on the website.',
            initialValue: true,
        }),
        defineField({
            name: 'heroImage',
            type: 'image',
            title: 'Banner Image',
            options: {
                hotspot: true, // Enables smart cropping
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility (describe the image).',
                    validation: (rule) => rule.required(),
                }),
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description for Designer/Team',
            description: 'Context notes about this campaign (not necessarily shown to users).',
            rows: 3,
        }),
        defineField({
            name: 'link',
            type: 'url',
            title: 'Promotion Link',
            description: 'Destination URL when the banner is clicked.',
        }),
        defineField({
            name: 'startDate',
            type: 'datetime',
            title: 'Start Date',
            description: 'Optional: Automatically start showing on this date.',
        }),
        defineField({
            name: 'endDate',
            type: 'datetime',
            title: 'End Date',
            description: 'Optional: Automatically stop showing on this date.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'heroImage',
            isActive: 'isActive',
        },
        prepare({ title, media, isActive }) {
            return {
                title: title,
                subtitle: isActive ? 'Active' : 'Inactive',
                media: media,
            }
        },
    },
})
