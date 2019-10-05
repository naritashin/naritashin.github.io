<template>
  <div class="sidemenu">sidemenu</div>
</template>

<script>
export default {
  name: 'Sidemenu',
  props: {
    current: {
      type: String,
      default: 'todo',
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.sidemenu {
  background-color: hsl(60, 25%, 98%);
  height: 100%;
  color: var(--color-text-inverse);
}
</style>
