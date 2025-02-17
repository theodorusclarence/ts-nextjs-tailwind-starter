export const createPodcastSchema = {
  title: 'Podcast',
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      maxLength: 200,
      title: 'Title',
      default: 'Podcast',
    },
    description: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Description',
    },
    target_audience: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Target Audience',
    },
    language: {
      type: 'string',
      maxLength: 10,
      title: 'Language',
      default: 'en',
    },
    host_name: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Host Name',
    },
    tone: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Tone',
    },
    style: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Style',
    },
    id: {
      anyOf: [
        {
          type: 'string',
          format: 'uuid',
        },
        {
          type: 'null',
        },
      ],
      title: 'Id',
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      title: 'Created At',
    },
  },
  // properties: {

  //   title: { type: 'string', title: 'Title', default: 'A new task' },
  //   done: { type: 'boolean', title: 'Done?', default: false },
  // },
};