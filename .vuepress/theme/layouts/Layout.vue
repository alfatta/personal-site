<template>
  <div>
    <TopBar />
    <Header v-if="layoutIs('home')" />
    <Navbar v-if="!layoutIs('home')" />
    <div class="container" v-if="!layoutIs('home')">
      <Content />
    </div>
    <ToggleLight />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    layoutIs(layout) {
      if (Array.isArray(layout)) return layout.includes(this.layout)
      return this.layout == layout
    }
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout
    }
  },
  components: {
    TopBar: () => import('../components/TopBar.vue'),
    Header: () => import('../components/Header.vue'),
    Navbar: () => import('../components/Navbar.vue'),
    ToggleLight: () => import('../components/ToggleLight.vue'),
  },
}
</script>
