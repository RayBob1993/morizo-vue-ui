import { isProduction } from './utils/env';

export default {
  srcDir: __dirname,
  modern: 'server',
  server: {
    port: process.env.APP_PORT
  },
  head: {
    title: 'mysite-nuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: ''
      },
      {
        hid: 'application-name',
        name: 'application-name',
        lang: 'ru',
        content: ''
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#fff'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#fff'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  styleResources: {
    scss: [
      '@/assets/scss/mixins/index.scss',
      '@/assets/scss/variables/index.scss'
    ]
  },
  css: [
    {
      src: '@/assets/scss/index.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    '@/plugins/components',
    '@/plugins/useException'
  ],
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    // '@nuxtjs/eslint-module',
    'nuxt-compress'
  ],
  render: {
    asyncScripts: true
  },
  build: {
    extractCSS: isProduction,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
};
