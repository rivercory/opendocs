import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Opendocs',
  tagline: 'Opendocs',
  favicon: 'img/opendocs_round.svg',
  url: 'https://opdocs.vercel.app',
  baseUrl: '/',
  organizationName: 'rivercory',
  projectName: 'Opendocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/rivercory/opendocs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/rivercory/opendocs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/opendocs_round.svg',
      navbar: {
        title: 'Opendocs',
        logo: {
          alt: 'Opendocs Logo',
          src: 'img/opendocs_round.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rivercory/opendocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rivercory/opendocs',
              },
            ],
          }
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
