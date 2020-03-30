const siteTitle = 'Alfatta Rezqa'
const siteDescription = 'Web developer with over 2 years experience. Experienced in using NodeJS stack, such as VueJS, ExpressJS and many more.'

module.exports = {
  // PROJECT CONFIGURATION
  base: '/',
  dest: '.vuepress/dist',
  host: '0.0.0.0',
  port: '8080',
  
  // META CONFIGURATION
  title: siteTitle,
  description: siteDescription,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis|Open+Sans&display=swap' }],
    ['script', { src: '/assets/js/main.min.js' }],

    // FOR PWA PURPOSE
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/alfatta/image/upload/v1581584168/personal-site/assets/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#64320a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/images/icons/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/images/icons/icon-152x152.png', color: '#64320a' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/images/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  // THEME CONFIGURATION
  themeConfig: {
    header: {
      title: siteTitle,
      description: siteDescription,
      background: 'https://res.cloudinary.com/alfatta/image/upload/v1581584168/personal-site/assets/bg.jpg',
      icon: 'https://res.cloudinary.com/alfatta/image/upload/v1581584168/personal-site/assets/icon.png'
    },
  },
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
}
