<template>
  <div>
    <Header v-if="$page.frontmatter.home" />
    <Content />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {
    Header: () => import(
      /* webpackChunkName: "c-header" */
      '../components/Header.vue'),
  },
}
</script>
