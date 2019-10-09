<template>
  <div class="scene">
    <SceneHeader />
    <Desktop current="top">
      <template slot="main">
        <div class="main">
          <h3 class="condition">Pending</h3>
          <div class="tasklist-wrap">
            <ul class="tasklist">
              <li v-for="(data, index) in pendingTasklist" :key="index" class="task">
                <Card :task="data" />
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Desktop>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Card from 'components/molecules/Card/CardLarge';
import Desktop from 'components/templates/Desktop';
import SceneHeader from 'components/organisms/SceneHeader';

export default {
  name: 'Top',
  components: { Card, Desktop, SceneHeader },
  computed: {
    ...mapState('top', [
      'openTasklist',
      'workingTasklist',
      'completedTasklist',
      'pendingTasklist'
    ])
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin: auto;
  width: 800px;
}

.tasklist-wrap {
  margin-block-start: 24px;
}

.condition {
  font-size: 3.2rem;
  line-height: 1;
}

.tasklist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.task {
  margin-block-end: 24px;
}
</style>
