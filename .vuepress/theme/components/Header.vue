<template>
  <div class="header">
    <div id="particles"></div>
    <div class="header-content">
      <img class="brand" :src="$themeConfig.header.icon">
      <p>Hi, I'm</p>
      <h1>{{ $themeConfig.header.title }}</h1>
    </div>
    <HeaderMask/>
  </div>
</template>

<script>
import 'particles.js'
import particlesConfig from '../styles/particles.json'

export default {
  name: 'c-header',
  components: {
    HeaderMask: () => import('./HeaderMask.vue'),
  },
  mounted() {
    particlesJS('particles', particlesConfig);
    var item = document.createElement('div');
    item.onclick = function () {
      setupLight()
    };
    item.style.display = 'none';
    document.body.appendChild(item);
    item.click();
    document.body.removeChild(item);
  }
};
</script>

<style lang="scss" scoped>
.header {
  color: #FFFFFF;
  position: relative;
  height: 400px;
  background-color: var(--secondary-background-color);
  overflow: hidden;

  .header-image{
    width: 100%;
    height: 400px;
    position: absolute;
    object-fit: cover;
    object-position: top;
  }

  .header-content {
    position: absolute;
    top: 45%;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    text-shadow: 2px 2px 5px black;

    img {
      width: 100%;
      max-width: 150px;
      border-radius: 50%;
    }

    p {
      margin-top: 30px;
      font-size: 1.25em;
    }

    h1 {
      margin-top: 10px;
      font-size: 2.5em;
      font-family: 'Dosis', sans-serif;
      letter-spacing: 2px;

      &::after {
        content: '_';
        animation: blinkingText 1.2s infinite;
      }
      @keyframes blinkingText{
        0%  { color: var(--text-color); }
        49% { color: var(--text-color); }
        60% { color: transparent; }
        99% { color: transparent; }
        100%{ color: var(--text-color); }
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    height: 300px;

    .header-image {
      height: 300px;
    }

    .header-content {
      img {
        max-width: 100px;
      }
    }
  }
}
</style>
