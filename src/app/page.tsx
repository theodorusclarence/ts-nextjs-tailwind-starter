'use client';

import * as React from 'react';
import Head from 'next/head';
import UnderlineLink from '@/components/links/UnderlineLink';
import '@/lib/env';

// --------- core form integration below -------- //

import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { withTheme } from '@rjsf/core';
import { Theme as ChakraUITheme } from '@rjsf/chakra-ui';
import { chakra } from '@chakra-ui/react';
import { createPodcastSchema } from '@/app/data/create-podcast-schema';
import createEpisodeSchema from '@/app/data/create-episode-schema';

// Make modifications to the theme with your own fields and widgets

const Formattica = withTheme(ChakraUITheme);

const schema: RJSFSchema = {
  title: 'ddß',
  type: 'object',
  required: ['title'],
  // properties: {
  //   ...podcastSchemaProps,
  // },
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

// eslint-disable-next-line no-console
const log = (type: string) => console.log.bind(console, type);

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <chakra.div px={4} w={'full'} maxW={'600px'} mx='auto'>
            <Formattica
              // schema={createEpisodeSchema}
              schema={{
                properties: {
                  title: {
                    type: 'string',
                    maxLength: 200,
                    title: 'Title',
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
                type: 'object',
                required: ['title'],
                title: 'Podcast',
              }}
              validator={validator}
              onChange={log('changed')}
              onSubmit={log('submitted')}
              onError={log('errors')}
            />
          </chakra.div>{' '}
        </div>
      </section>
    </main>
  );
}
