<template>
  <div class="scene">
    <SceneHeader />
    <Desktop current="top">
      <template slot="sidemenu">
        <Sidemenu current="todo" />
      </template>
      <template slot="main">main</template>
    </Desktop>
  </div>
</template>

<script>
import Desktop from 'components/templates/Desktop';
import SceneHeader from 'components/organisms/SceneHeader';
import Sidemenu from 'components/organisms/Sidemenu';

export default {
  name: 'Top',
  components: { Desktop, SceneHeader, Sidemenu }
};
</script>

<style lang="scss" scoped>
</style>
