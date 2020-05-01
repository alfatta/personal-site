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
var particleColor = {
  light: '#000000',
  dark: '#ffffff'
}

function setupLight() {
  document.getElementsByTagName('html')[0].setAttribute('data-theme', lightUp ? 'light' : 'dark');
  if (typeof(pJSDom) !== 'undefined') {
    changeParticleColor(lightUp ? particleColor.light : particleColor.dark);
  }
}

function changeParticleColor(newColor) {
  for (let i = 0; i < pJSDom[0].pJS.particles.array.length; i++) {
    pJSDom[0].pJS.particles.array[i].color.value = newColor;
    pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
    pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16)
  } : null;
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
