const siteTitle = 'Alfatta Rezqa'
const siteDescription = 'Web developer with over 2 years experience. Experienced in using NodeJS stack, such as VueJS, ExpressJS and many more.'

module.exports = {
  themeConfig: {
    header: {
      title: siteTitle,
      description: siteDescription,
      background: '/assets/img/bg.jpg',
      icon: '/assets/img/logo.png'
    },
    navMenu: [
      { path: '/', title: 'Home' },
      { path: '/blog', title: 'Blogs' },
      { path: '/about', title: 'About' },
      { path: '/now', title: 'Now' },
    ]
  },
}
