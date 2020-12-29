export default {
  modules: [
    {
      id: '9b72e329-5f92-427e-b4bb-33117556af82',
      module: 'identity',
      title: 'Identity',
      slug: 'Identity',
      short_description: '',
      content: '',
      attributes: {},
      attachments: [],
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
          type: 'info-element',
          title: 'Name',
          short_description: '',
          elements: [
            {
              type: 'single',
              name: 'NameBox',
              params: {
                name: 'DealMachine',
                doNot: [
                  'Deal Machine',
                  'Dealmachine',
                ],
              },
            },
            {
              type: 'edit',
              name: 'AnimationButton',
              params: {
                icon: <FontAwesomeIcon icon={faPen} />,
                text: 'Edit',
                color: '#3e3d3d',
                bgColor: '#ededed',
              },
            },
          ],
        },
        // Logo
        {
          id: 'logo',
          type: 'info-element',
          title: 'Logo',
          short_description: '',
          elements: [
            {
              type: 'multiple',
              name: 'LogoViewer',
              params: [
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
              type: 'multiple',
              name: 'LogoDoNotViewer',
              params: [
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
              name: 'AnimationButton',
              params: {
                icon: <FontAwesomeIcon icon={faPen} />,
                text: 'Edit',
                color: '#3e3d3d',
                bgColor: '#ededed',
              },
            },
          ],
        },
        // Colors
        {
          id: 'colors',
          type: 'info-element',
          title: 'Colors',
          short_description: '',
          elements: [
            {
              type: 'multiple',
              name: 'ColorItem',
              params: [
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
              name: 'AnimationButton',
              params: {
                icon: <FontAwesomeIcon icon={faPen} />,
                text: 'Edit',
                color: '#3e3d3d',
                bgColor: '#ededed',
              },
            },
          ],
        },
        // Fonts
        {
          id: 'fonts',
          type: 'info-element',
          title: 'Fonts',
          short_description: '',
          elements: [
            {
              type: 'multiple',
              name: 'FontItem',
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
        },
        // Imagery
        {
          id: 'imagery',
          type: 'info-element',
          title: 'Imagery',
          short_description: '',
          elements: [
            {
              type: 'single',
              name: 'Gallery',
              params: {
                images: [
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
            },
            {
              type: 'edit',
              name: 'AnimationButton',
              params: {
                icon: <FontAwesomeIcon icon={faPen} />,
                text: 'Edit',
                color: '#3e3d3d',
                bgColor: '#ededed',
              },
            },
            {
              type: 'sortByTag',
              name: 'AnimationButton',
              params: {
                icon: <FontAwesomeIcon icon={faTag} />,
                text: 'Edit',
                color: '#fff',
                bgColor: '#006886',
              },
            },
          ],
        },
      ],
    },
  ],
};
