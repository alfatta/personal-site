<template>
  <div>
    <Header v-if="$page.frontmatter.home" />
    <Content />
    <ToggleLight />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {
    Header: () => import('../components/Header.vue'),
    ToggleLight: () => import('../components/ToggleLight.vue'),
  },
}
</script>
