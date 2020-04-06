
<template>
  <div class="navbar">
    <div class="navbar-toggle" >
      <div class="navbar-brand">
        <img :src="$themeConfig.header.icon" alt="">
        <h1>Alfatta Rezqa</h1>
      </div>
      <label for="toggle-navbar">&#9776;</label>
    </div>
    <input type="checkbox" id="toggle-navbar">
    <div class="navbar-menu" id="navmenu">
      <a :href="menu.path" class="menu-item" v-for="menu in navMenu">
        {{ menu.title }}
      </a>
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
.navbar {
  background-color: var(--secondary-background-color);
  position: sticky;
  top: 5px;

  input {
    display: none;
  }
    
  .navbar-toggle {
    padding: 15px;
    display: none;
    justify-content: space-between;
    align-items: center;
    
    .navbar-brand {
      * {
        display: inline-block;
        vertical-align: middle;
      }
      h1 {
        font-family: 'Dosis', sans-serif;
        font-size: 1.5em;
        margin-left: 5px;
      }
      img {
        border-radius: 50%;
        height: 2em;
      }
    }
    
    label {
      cursor: pointer;
      padding: 5px 8px;
      border: 1px var(--text-color) solid;
      border-radius: 5px;
      display: block;
    }
  }

  .navbar-menu {
    text-align: center;
    
    a, a:visited {
      display: inline-block;
      box-sizing: border-box;
      padding: 20px;
      color: var(--text-color);
      text-decoration: none;
      border-bottom: 1px dotted var(--background-color);

      &:hover {
        color: var(--accent-color);
        border-bottom-color: var(--accent-color);
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    .navbar-toggle {
      display: flex;
    }

    .navbar-menu {
      display: none;

      a {
        display: block;
      }
    }

    input:checked + .navbar-menu {
      display: block;
    }
  }
}
</style>
