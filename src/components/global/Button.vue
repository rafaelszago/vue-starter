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
  border-radius: 2rem;
  padding: 0.6rem 1.4rem;
  color: #ffffff;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background-color: #0d61c2;
  }
}
</style>
