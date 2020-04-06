module.exports = {
  plugins : [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'UpdatePopup',
        updatePopup: true
      }
    ]
  ]
}
