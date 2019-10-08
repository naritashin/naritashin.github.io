<template>
  <div class="desktop">
    <div class="sidemenu-wrap">
      <slot name="sidemenu" />
    </div>
    <div class="main-wrap">
      <slot name="main" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Desktop'
};
</script>

<style lang="scss" scoped>
.desktop {
  background-color: var(--color-background);
  color: var(--color-text);
  display: grid;
  grid-template-areas: "sidemenu main";
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  padding-top: var(--height-header);
}

.sidemenu-wrap {
  background-color: var(--color-background-content);
  grid-area: sidemenu;
  padding: 40px 0 128px;
}

.main-wrap {
  grid-area: main;
  padding: 64px 32px 128px;
}
</style>
