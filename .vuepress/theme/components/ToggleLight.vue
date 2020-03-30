<template>
  <div class="toggle-light" onclick="toggleLight()">
    <i class="ic-light"></i>
  </div>
</template>

<style lang="scss" scoped>
  .toggle-light {
    position: fixed;
    bottom: 20vh;
    right: 0;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 1.5em;
    filter: invert(15%);    
  }
</style>
