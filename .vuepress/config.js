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
    ['script', { src: '/assets/js/main.js' }],
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
}
