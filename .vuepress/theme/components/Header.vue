<template>
  <div class="header">
    <img :src="$themeConfig.header.background" class="header-image">
    <div class="header-content">
      <img class="brand" :src="$themeConfig.header.icon">
      <p>Hi, I'm</p>
      <h1>{{ $themeConfig.header.title }}</h1>
    </div>
    <HeaderMask/>
  </div>
</template>

<script>
export default {
  name: 'c-header',
  components: {
    HeaderMask: () => import(
      /* webpackChunkName: "c-header-mask" */
      './HeaderMask.vue'),
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: #FFFFFF;
  position: relative;
  height: 400px;
  border-top: 5px solid var(--accent-color);

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
