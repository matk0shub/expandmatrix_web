import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'General',
          value: 'general',
        },
        {
          label: 'AI Agents',
          value: 'ai-agents',
        },
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'AI Implementation',
          value: 'ai-implementation',
        },
        {
          label: 'Process',
          value: 'process',
        },
      ],
      defaultValue: 'general',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
