<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="update-popup">
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style lang="scss" scoped>
.update-popup {
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  padding: 10px;
  border-bottom: 5px solid var(--accent-color);
  background-color: var(--background-color);
  color: var(--text-color);
  filter: invert(15%);

  button {
    border: 1px solid #fefefe;
    margin-top: 5px;
    border-radius: 2px;
  }
}
</style>
