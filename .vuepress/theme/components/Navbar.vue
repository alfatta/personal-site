
<template>
  <div class="navbar">
    <div class="navbar-header">
      <a href="/" class="navbar-brand">
        <img :src="$themeConfig.header.icon" alt="">
        <h1>Alfatta Rezqa</h1>
      </a>
      <div class="navbar-toggle">
        <label for="toggle-navbar">&#9776;</label>
      </div>
      <div class="break"></div>
      <input type="checkbox" id="toggle-navbar">
      <div class="navbar-menu" id="navmenu">
        <a :href="menu.path" class="menu-item" v-for="menu in navMenu">
          {{ menu.title }}
        </a>
      </div>
    </div>
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
a {
  color: var(--text-color);

  &:hover {
    border-color: var(--text-color);

    &.navbar-brand{
      border-color: transparent;
    }
  }
}

.navbar {
  background-color: var(--secondary-background-color);
  position: sticky;
  top: 5px;

  .navbar-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  .navbar-brand {
    text-decoration: none;
    * {
      display: inline-block;
      vertical-align: middle;
    }

    h1 {
      font-family: 'Dosis', sans-serif;
      font-size: 1.5em;
      margin-left: 15px;
    }
    img {
      border-radius: 50%;
      height: 2em;
    }
  }

  .navbar-menu {
    display: flex;
    flex-wrap: wrap;

    .menu-item + .menu-item {
      margin-left: 10px;
    }
    
    .menu-item {
      padding: 8px 14px;
    }
  }

  .navbar-toggle {
    display: none;

    label {
      cursor: pointer;
      padding: 5px 8px;
      border: 1px var(--text-color) solid;
      border-radius: 5px;
      display: block;
    }
  }

  input {
    display: none;
  }

  .break {
    display: none;
    flex-basis: 100%;
    height: 0;
  }
}

@media screen and (max-width: 640px) {
  .navbar {
    .navbar-toggle {
      display: block;
    }
    
    .navbar-menu {
      display: none;
      margin-top: 20px;
      flex-basis: 100%;
      
      .menu-item {
        flex-basis: 100%;
        text-align: center;
      }

      .menu-item + .menu-item {
        margin: 0 !important;
        margin-top: 5px !important;
      }
    }

    input:checked + .navbar-menu {
      display: flex;
    }

    .break {
      display: block;
    }
  }
}
</style>
