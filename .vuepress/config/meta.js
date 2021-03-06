const siteTitle = 'Alfatta Rezqa'
const siteDescription = 'Web developer with over 2 years experience. Experienced in using NodeJS stack, such as VueJS, ExpressJS and many more.'

module.exports = {
  title: siteTitle,
  description: siteDescription,
  head: [
    ['link', { rel: 'preconnect', href: 'https://storage.googleapis.com/' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis|Open+Sans&display=swap' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js' }],
    ['script', { src: '/assets/js/main.min.js' }],

    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#141414' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/assets/img/apple-icon-57x57-precomposed.png' } ],
    ['meta', { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/assets/img/apple-icon-72x72-precomposed.png' } ],
    ['meta', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/assets/img/apple-icon-114x114-precomposed.png' } ],
    ['meta', { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/assets/img/apple-icon-144x144-precomposed.png' } ],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/icon-152x152.png', color: '#FFFFFF' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#FFFFFF' }]
  ],
}
