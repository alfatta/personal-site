
<template>
  <div class="navbar">
    <ul>
      <li v-for="menu in navMenu">
        <a :href="menu.path">
          {{ menu.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'c-navbar',
  computed: {
    navMenu() {
      return this.$themeConfig.navMenu
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  text-align: center;

  ul {
    list-style-type: none;

    li {
      margin: 10px;
      padding: 20px;
      display: inline-block;

      a, a:visited {
        color: var(--text-color);
        text-decoration: none;

        &:hover {
          color: var(--accent-color);
          border-bottom: 1px dotted var(--accent-color);
        }
      }
    }
  }
}
</style>
