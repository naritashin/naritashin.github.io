<template>
  <header class="header">
    <span>Your Task Is</span>
    <nav class="navigation">
      <router-link v-text="'Top'" class="navigation-link" to="/top" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SceneHeader'
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-brand);
  height: var(--height-header);
  position: fixed;
  top: 0;
  width: 100vw;
  color: var(--color-text-inverse);
  padding-left: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  justify-content: space-between;
}
</style>
