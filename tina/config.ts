import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'json',
        ui: {
          router: ({ document }) => {
            const path = document._sys.relativePath.replace(/\.json$/, '');

            if (path === 'homePage') {
              return '/';
            }
            if (path === 'uberUns') {
              return '/uber-uns';
            }
            return `/${path}`;
          },
        },
        fields: [
          {
            type: 'rich-text',
            name: 'title',
            label: 'Hero Heading',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'subHeading',
            label: 'Hero Subheading',
            required: true,
          },
          {
            type: 'string',
            name: 'logoBannerEyebrow',
            label: 'Logo Banner Eyebrow',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'logoBannerHeading',
            label: 'Logo Banner Heading',
            required: true,
          },
          {
            type: 'object',
            name: 'widePictureAndTextSections',
            label: 'Wide Picture And Text Sections',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.id || 'Wide picture and text',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'id',
                label: 'Section ID',
                required: true,
              },
              {
                type: 'string',
                name: 'eyebrow',
                label: 'Eyebrow / Caption',
              },
              {
                type: 'rich-text',
                name: 'heading',
                label: 'Heading',
              },
              {
                type: 'string',
                name: 'body',
                label: 'Body',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'valuesAndImages',
            label: 'Values And Images',
            fields: [
              {
                type: 'string',
                name: 'eyebrow',
                label: 'Eyebrow',
                required: true,
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
              },
              {
                type: 'string',
                name: 'heading1',
                label: 'Heading 1',
                required: true,
              },
              {
                type: 'string',
                name: 'paragraph1',
                label: 'Paragraph 1',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'heading2',
                label: 'Heading 2',
                required: true,
              },
              {
                type: 'string',
                name: 'paragraph2',
                label: 'Paragraph 2',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'heading3',
                label: 'Heading 3',
                required: true,
              },
              {
                type: 'string',
                name: 'paragraph3',
                label: 'Paragraph 3',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'heading4',
                label: 'Heading 4',
                required: true,
              },
              {
                type: 'string',
                name: 'paragraph4',
                label: 'Paragraph 4',
                required: true,
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
        ],
      },
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
