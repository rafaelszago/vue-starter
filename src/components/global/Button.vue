<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'base-button'
}
</script>

<style lang="scss">
.btn {
  background-color: #1273e3;
  color: #ffffff;
}
</style>
