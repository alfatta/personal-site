module.exports = {
  plugins : [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'UpdatePopup',
        updatePopup: true
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://alfattarezqa.com',
        exclude: ['/404.html']
      },
    ]
  ]
}
