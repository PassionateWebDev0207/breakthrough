export default {
  page_id: 2,
  page_title: 'Identity',
  modules: [
    {
      id: '9b72e329-5f92-427e-b4bb-33117556af82',
      module: 'identity',
      title: 'Identity',
      slug: 'Identity',
      short_description: '',
      content: '',
      attributes: {
        order: 1,
        created_on: '2011-01-24 12:00:00',
        created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
        version_id: 'd264d374-a56a-41f6-b18c-df954437319e',
        status: 'published',
        discussion_status: 'active',

        versions: [
          {
            id: 'd264d374-a56a-41f6-b18c-df9544373190',
            created_on: '2011-01-24 12:00:00',
            created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
          },
          {
            id: 'd264d374-a56a-41f6-b18c-df9544373191',
            created_on: '2011-01-24 12:00:03',
            created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',

            module: 'Identity',
            title: 'Identity',
            slug: 'identity',
            short_description: '',
            content: '',
            attributes: {
              order: 1,
              created_on: '2011-01-24 12:00:00',
              created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
              version_id: 'd264d374-a56a-41f6-b18c-df954437319e',
              status: 'published',
              discussion_status: 'active',
            },
            attachments: [],
            components: [],
            boards: [],
          },
        ],
      },
      attachments: [
        {
          id: 'b4f5eac8-8ddd-4f63-b13d-d8bdce140d20',
          attachment_id: '9b72e329-5f92-427e-b4bb-33117556af80',
          attachment_path: 'attachements/images/image.png',
        },
        {
          id: 'b4f5eac8-8ddd-4f63-b13d-d8bdce140d20',
          attachment_id: '9b72e329-5f92-427e-b4bb-33117556af80',
          attachment_path: 'attachements/images/image.png',

          // <!-- Additional fields when called directly -->

          attachment_type: '',
          mime_type: 'image/png',
          file_name: 'image.png',
          order: 0,
        },
      ],
      components: [
        {
          id: 'header',
          type: 'Header',
          title: 'Identity',
          short_description: '',
          content: '',
          attachments: [
            {
              id: undefined,
              attachment_id: undefined,
              attachment_path: 'https://images.ctfassets.net/tbaxdqcpgx77/Uc5p6I6yilxlxcYhEHm8T/b0aa479c8ef1dd4fd4cc807b019bd1cc/PropertyOwnershipMap.svg',
            },
          ],
          elements: [
            {
              type: 'header-element',
              content: [
                'Ensure a consistent and strategically aligned identity is leverage by your internal and external teams.',
              ],
            },
          ],
        },
        // Name
        {
          id: 'name',
          type: 'Name',
          title: 'Name',
          short_description: '',
          content: '',
          elements: [
            {
              type: 'name-element',
              content: 'DealMachine',
            },
            {
              type: 'do-not-element',
              content: [
                'Deal Machine',
                'Dealmachine',
              ],
            },
            {
              type: 'edit',
            },
          ],
          boards: [],
        },
        // Logo
        {
          id: 'logo',
          type: 'Logo',
          title: 'Logo',
          short_description: '',
          content: '',
          elements: [
            {
              type: 'logo-element',
              content: [
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                  links: {
                    svg: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                    esp: '',
                    png: '',
                    jpeg: '',
                  },
                },
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/WhiteLogo_DarkBG.svg',
                  links: {
                    svg: 'https://breakthroughos.com/wp-content/uploads/2020/09/WhiteLogo_DarkBG.svg',
                    esp: '',
                    png: '',
                    jpeg: '',
                  },
                },
              ],
            },
            {
              type: 'do-not-element',
              content: [
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                  description: 'Use other colors.',
                },
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                  description: 'Use other colors.',
                },
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                  description: 'Use other colors.',
                },
                {
                  img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
                  description: 'Use other colors.',
                },
              ],
            },
            {
              type: 'edit',
            },
          ],
          boards: [],
        },
        // Colors
        {
          id: 'colors',
          type: 'Colors',
          title: 'Colors',
          short_description: '',
          content: '',
          elements: [
            {
              type: 'color-element',
              content: [
                {
                  title: 'primary',
                  hex: '#31cce5',
                },
                {
                  title: 'secondary',
                  hex: '#004e64',
                },
                {
                  title: 'tertiary',
                  hex: '#324b50',
                },
                {
                  title: 'additional',
                  hex: '#b24c63',
                },
              ],
            },
            {
              type: 'edit',
            },
          ],
          boards: [],
        },
        // Fonts
        {
          id: 'fonts',
          type: 'Fonts',
          title: 'Fonts',
          short_description: '',
          content: '',
          elements: [
            {
              type: 'font-element',
              content: [
                {
                  fontFamily: 'Raleway',
                  title: 'primary',
                },
                {
                  fontFamily: 'Open Sans',
                  title: 'secondary',
                },
                {
                  fontFamily: 'Helvetica',
                  title: 'tertiary',
                },
              ],
            },
            {
              type: 'edit',
            },
          ],
          boards: [],
        },
        // Imagery
        {
          id: 'imagery',
          type: 'Gallery',
          title: 'Imagery',
          short_description: '',
          content: '',
          elements: [
            {
              type: 'image-element',
              content: [
                'https://breakthroughos.com/wp-content/uploads/2020/07/photo-1419833173245-f59e1b93f9ee.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/07/Blog-img3.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1524178232363-1fb2b075b655.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/07/n2xcpr1izxa-scaled.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/07/Thailand-img.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1529119368496-2dfda6ec2804.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/07/elif-pr-img2.png',
                'https://breakthroughos.com/wp-content/uploads/2020/07/kayaking-img.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1503428593586-e225b39bddfe.jpg',
                'https://breakthroughos.com/wp-content/uploads/2020/07/elif-pr-img3.png',
                'https://breakthroughos.com/wp-content/uploads/2020/07/Harbor-lake.jpg',
              ],
            },
            {
              type: 'edit',
            },
            {
              type: 'sortByTag',
            },
          ],
          boards: [],
        },
      ],
      boards: [
        {
          id: 'd264d374-a56a-41f6-b18c-df9544373190',
          created_on: '2011-01-24 12:00:00',
          created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
          last_updated_on: '2011-01-24 12:00:00',
          comment_count: 153,
        },
        {
          id: 'd264d374-a56a-41f6-b18c-df9544373190',
          created_on: '2011-01-24 12:00:00',
          created_by: 'e67982b6-4267-426e-96a4-a6981f826d55',
          last_updated_on: '2011-01-24 12:00:00',
          comment_count: 153,

          // <!-- Additional fields when called directly -->

          collaborators: [
            {
              id: 0,
              user_name: 'John Doe',
              display_picture_id: '9b72e329-5f92-427e-b4bb-33117556af80',

              // <!-- Additional fields when called directly -->

              email: 'servers@insivia.com',
              password: '$1$O3JMY.Tw$AdLnLjQ/5jXF9.MTp3gHv/', // MD5
              email_verified_at: '2011-01-24 12:00:00',
              attempt: 3,
              user_status: 'active',
              client_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
              lock_count: 0,
              lock_time: '2011-01-24 12:00:00',
              max_lockout_count: 3,
              max_lockout_minutes: 15,
              last_user_managed: undefined, // Not sure what this is.
              last_account_used: undefined, // Not sure what this is.
              last_changed_password: '2011-01-24 12:00:00',
              created_on: '2011-01-24 12:00:00',
              archived_date: null,
            },
          ],
          comments: [
            {
              id: '5fe7937b-01b7-4ddc-8dac-26da9cae45ae',
              comment_id: '9b72e329-5f92-427e-b4bb-33117556af8e',
              user_id: 'e67982b6-4267-426e-96a4-a6981f826d55',
              content: 'Test Comment',
              has_children: false,
              parent_id: null,

              // <!-- Additional fields when called directly -->

              author_ip: '127.0.0.1',
              comment_type: '',
              child_comments: [
                {
                  id: '5fe7937b-01b7-4ddc-8dac-26da9cae45ae',
                  comment_id: '9b72e329-5f92-427e-b4bb-33117556af8e',
                  user_id: 'e67982b6-4267-426e-96a4-a6981f826d55',
                  content: 'Test Comment',
                  has_children: false,
                  parent_id: null,
                  author_ip: '127.0.0.1',
                  comment_type: '',
                  child_comments: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
