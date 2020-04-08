function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var lightUp = getCookie('light') == 'true';

function setupLight() {
  document.getElementsByTagName('html')[0].setAttribute('data-theme', lightUp ? 'light' : 'dark');
}

setupLight();

function toggleLight() {
  lightUp = !lightUp;
  document.cookie = 'light=' + lightUp;
  setupLight();
}

function toggleNavbar() {
  let nav = document.getElementById('navmenu')
  let navDisplay = nav.style.display
  if (!navDisplay || navDisplay == 'none') {
    nav.style.display = 'block'
  } else {
    nav.style.display = 'none'
  }
}

domReady(function() {

});
