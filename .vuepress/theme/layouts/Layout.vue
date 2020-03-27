<template>
  <div>
    <Header v-if="$page.frontmatter.home" />
    <Content />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  created() {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark');
  },
  components: {
    Header: () => import(
      /* webpackChunkName: "c-header" */
      '../components/Header.vue'),
  },
}
</script>
