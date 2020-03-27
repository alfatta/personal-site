<template>
  <div class="header-mask">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'c-header-mask',
};
</script>

<style lang="scss" scoped>
.header-mask {
  position: absolute;
  bottom: 0;
  width: 100%;

  * {
    position: absolute;
    bottom: 0;
    border-top: 10vw transparent solid;
  }

  @media (min-width: 768px) {
    * { border-top-width: 6vw; }
  }

  .left {
    left: 0;
    border-left: 50vw var(--background-color) solid;
  }

  .right {
    right: 0;
    border-right: 50vw var(--background-color) solid;
  }
}
</style>
