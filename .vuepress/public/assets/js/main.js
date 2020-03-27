function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}

document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark');

domReady(function() {

});
