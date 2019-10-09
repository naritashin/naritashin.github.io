<template>
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="icon"
    :width="size"
    :height="size"
    :fill="iconColor"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconColor: {
      type: String,
      default: '#888'
    },
    size: {
      type: [String, Number],
      default: 16
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  font-size: 0;
}
</style>
