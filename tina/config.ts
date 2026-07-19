import { defineConfig, type TinaField } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

const heroFields: TinaField[] = [
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
];

const widePictureAndTextSectionsField: TinaField = {
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
};

const keyPointsField: TinaField = {
  type: 'object',
  name: 'keyPoints',
  label: 'Key Points',
  fields: [
    {
      type: 'string',
      name: 'heading1',
      label: 'Heading 1',
    },
    {
      type: 'string',
      name: 'subtext1',
      label: 'Subtext 1',
    },
    {
      type: 'string',
      name: 'heading2',
      label: 'Heading 2',
    },
    {
      type: 'string',
      name: 'subtext2',
      label: 'Subtext 2',
    },
    {
      type: 'string',
      name: 'heading3',
      label: 'Heading 3',
    },
    {
      type: 'string',
      name: 'subtext3',
      label: 'Subtext 3',
    },
  ],
};

const bulletPointsField: TinaField = {
  type: 'object',
  name: 'bulletPoints',
  label: 'Bullet Points',
  fields: [
    {
      type: 'string',
      name: 'caption',
      label: 'Caption',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'point1',
      label: 'Point 1',
    },
    {
      type: 'string',
      name: 'body1',
      label: 'Body 1',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'point2',
      label: 'Point 2',
    },
    {
      type: 'string',
      name: 'body2',
      label: 'Body 2',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'point3',
      label: 'Point 3',
    },
    {
      type: 'string',
      name: 'body3',
      label: 'Body 3',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'point4',
      label: 'Point 4',
    },
    {
      type: 'string',
      name: 'body4',
      label: 'Body 4',
      ui: {
        component: 'textarea',
      },
    },
  ],
};

const leftTextAndButtonField: TinaField = {
  type: 'object',
  name: 'leftTextAndButton',
  label: 'Left Text And Button',
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      label: 'Eyebrow',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
      ui: {
        component: 'textarea',
      },
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
};

const someTextField: TinaField = {
  type: 'object',
  name: 'someText',
  label: 'Some Text',
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      label: 'Eyebrow',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
      ui: {
        component: 'textarea',
      },
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
};

const managementGalleryField: TinaField = {
  type: 'object',
  name: 'managementGallery',
  label: 'Management Gallery',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'string',
      name: 'name1',
      label: 'Member 1 Name',
    },
    {
      type: 'string',
      name: 'role1',
      label: 'Member 1 Role',
    },
    {
      type: 'string',
      name: 'name2',
      label: 'Member 2 Name',
    },
    {
      type: 'string',
      name: 'role2',
      label: 'Member 2 Role',
    },
    {
      type: 'string',
      name: 'name3',
      label: 'Member 3 Name',
    },
    {
      type: 'string',
      name: 'role3',
      label: 'Member 3 Role',
    },
    {
      type: 'string',
      name: 'name4',
      label: 'Member 4 Name',
    },
    {
      type: 'string',
      name: 'role4',
      label: 'Member 4 Role',
    },
  ],
};

const teamGalleryField: TinaField = {
  type: 'object',
  name: 'teamGallery',
  label: 'Team Gallery',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
  ],
};

const linksToServicesField: TinaField = {
  type: 'object',
  name: 'linksToServices',
  label: 'Links To Services',
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      label: 'Eyebrow',
    },
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
  ],
};

const doubleWidePictureAndTextField: TinaField = {
  type: 'object',
  name: 'doubleWidePictureAndText',
  label: 'Double Wide Picture And Text',
  fields: [
    {
      type: 'string',
      name: 'eyebrow',
      label: 'Eyebrow / Caption',
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
      name: 'body',
      label: 'Body',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
  ],
};

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
        templates: [
          {
            name: 'home',
            label: 'Homepage',
            fields: [
              ...heroFields,
              {
                type: 'string',
                name: 'logoBannerEyebrow',
                label: 'Logo Banner Eyebrow',
              },
              {
                type: 'rich-text',
                name: 'logoBannerHeading',
                label: 'Logo Banner Heading',
              },
              widePictureAndTextSectionsField,
              doubleWidePictureAndTextField,
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
              linksToServicesField,
              {
                type: 'object',
                name: 'formWhitespace',
                label: 'Form Whitespace',
                fields: [
                  {
                    type: 'string',
                    name: 'heading',
                    label: 'Heading',
                  },
                ],
              },
              {
                type: 'object',
                name: 'map',
                label: 'Map',
                fields: [
                  {
                    type: 'string',
                    name: 'heading',
                    label: 'Heading',
                  },
                ],
              },
              keyPointsField,
              leftTextAndButtonField,
            ],
          },
          {
            name: 'about',
            label: 'Über uns',
            fields: [
              ...heroFields,
              someTextField,
              managementGalleryField,
              teamGalleryField,
              widePictureAndTextSectionsField,
              keyPointsField,
              leftTextAndButtonField,
            ],
          },
          // Temporary catch-all for pages not yet given a dedicated template
          {
            name: 'default',
            label: 'Default Page',
            fields: [
              ...heroFields,
              someTextField,
              widePictureAndTextSectionsField,
              doubleWidePictureAndTextField,
              bulletPointsField,
              linksToServicesField,
              keyPointsField,
              leftTextAndButtonField,
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
      {
        name: 'global',
        label: 'Site Settings',
        path: 'content/global',
        format: 'json',
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'address',
            label: 'Address',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
});
