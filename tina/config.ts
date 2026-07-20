import { defineConfig, type TinaField } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

const heroFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Hero Heading',
    required: true,
    ui: {
      component: 'textarea',
    },
  },
  {
    type: 'string',
    name: 'subHeading',
    label: 'Hero Subheading',
    required: true,
    ui: {
      component: 'textarea',
    },
  },
];

const heroImageField: TinaField = {
  type: 'image',
  name: 'heroImage',
  label: 'Hero Image',
  required: true,
};

const widePictureAndTextInnerFields: TinaField[] = [
  {
    type: 'image',
    name: 'image',
    label: 'Image',
  },
  {
    type: 'string',
    name: 'eyebrow',
    label: 'Eyebrow / Caption',
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
];

const makeWidePictureAndTextField = (name: string, label: string): TinaField => ({
  type: 'object',
  name,
  label,
  fields: widePictureAndTextInnerFields,
});

const widePictureAndTextField = makeWidePictureAndTextField('widePictureAndText', 'Wide Picture And Text');
const widePictureAndTextSecondaryField = makeWidePictureAndTextField(
  'widePictureAndTextSecondary',
  'Wide Picture And Text (Second)',
);

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
  label: 'Text section',
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
      type: 'image',
      name: 'image1',
      label: 'Member 1 Image',
      required: true,
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
      type: 'image',
      name: 'image2',
      label: 'Member 2 Image',
      required: true,
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
      type: 'image',
      name: 'image3',
      label: 'Member 3 Image',
      required: true,
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
      type: 'image',
      name: 'image4',
      label: 'Member 4 Image',
      required: true,
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
    {
      type: 'object',
      name: 'images',
      label: 'Team Images',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.image ? 'Team photo' : 'New team photo',
        }),
      },
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Image',
          required: true,
        },
      ],
    },
  ],
};

const contactFormField: TinaField = {
  type: 'object',
  name: 'contactForm',
  label: 'Contact Form',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
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
      type: 'image',
      name: 'imageLeft',
      label: 'Image Left',
    },
    {
      type: 'image',
      name: 'imageRight',
      label: 'Image Right',
    },
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
  // Repo-based media: uploads land in public/images (no Cloudinary/S3).
  // Tina stores paths like "/images/foo.jpg" which next/image can use directly.
  // Organized folders: links-to-services, wide-picture-and-text,
  // double-wide-picture-and-text, management-headshots (each with unusedImages/).
  media: {
    tina: {
      mediaRoot: 'images',
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
                type: 'string',
                name: 'logoBannerHeading',
                label: 'Logo Banner Heading',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'image',
                name: 'logoBannerImage1',
                label: 'Logo Banner Image 1',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage2',
                label: 'Logo Banner Image 2',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage3',
                label: 'Logo Banner Image 3',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage4',
                label: 'Logo Banner Image 4',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage5',
                label: 'Logo Banner Image 5',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage6',
                label: 'Logo Banner Image 6',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage7',
                label: 'Logo Banner Image 7',
                required: true,
              },
              {
                type: 'image',
                name: 'logoBannerImage8',
                label: 'Logo Banner Image 8',
                required: true,
              },
              widePictureAndTextField,
              widePictureAndTextSecondaryField,
              doubleWidePictureAndTextField,
              {
                type: 'object',
                name: 'valuesAndImages',
                label: 'Values And Images',
                fields: [
                  {
                    type: 'image',
                    name: 'image1',
                    label: 'Image 1',
                    required: true,
                  },
                  {
                    type: 'image',
                    name: 'image2',
                    label: 'Image 2',
                    required: true,
                  },
                  {
                    type: 'image',
                    name: 'image3',
                    label: 'Image 3',
                    required: true,
                  },
                  {
                    type: 'image',
                    name: 'image4',
                    label: 'Image 4',
                    required: true,
                  },
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
                    type: 'image',
                    name: 'mapImage',
                    label: 'Map Image',
                  },
                  {
                    type: 'image',
                    name: 'locationImage',
                    label: 'Location Image',
                  },
                  {
                    type: 'string',
                    name: 'heading',
                    label: 'Heading',
                  },
                ],
              },
              leftTextAndButtonField,
              contactFormField,
            ],
          },
          {
            name: 'about',
            label: 'Über uns',
            fields: [
              ...heroFields,
              heroImageField,
              someTextField,
              managementGalleryField,
              teamGalleryField,
              widePictureAndTextField,
              widePictureAndTextSecondaryField,
              leftTextAndButtonField,
              contactFormField,
            ],
          },
          {
            name: 'servicesOverview',
            label: 'Leistungen Overview',
            fields: [...heroFields, heroImageField, someTextField, contactFormField],
          },
          {
            name: 'service',
            label: 'Service Page',
            fields: [
              ...heroFields,
              heroImageField,
              widePictureAndTextField,
              doubleWidePictureAndTextField,
              bulletPointsField,
              contactFormField,
            ],
          },
          {
            name: 'jobs',
            label: 'Jobs Page',
            fields: [
              ...heroFields,
              heroImageField,
              widePictureAndTextField,
              doubleWidePictureAndTextField,
              bulletPointsField,
              contactFormField,
            ],
          },
        ],
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
          keyPointsField,
          linksToServicesField,
        ],
      },
    ],
  },
});
