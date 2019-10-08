<template>
  <div class="scene">
    <SceneHeader />
    <Desktop current="top">
      <template slot="sidemenu">
        <Sidemenu current="todo" />
      </template>
      <template slot="main">
        <div class="main">
          <div class="tasklist-wrap">
            <h3 class="condition">Open</h3>
            <ul class="tasklist">
              <li v-for="(data, index) in openTasklist" :key="index" class="task">
                <Card :task="data" />
              </li>
            </ul>
          </div>
          <div class="tasklist-wrap">
            <h3 class="condition">Working</h3>
            <ul class="tasklist">
              <li v-for="(data, index) in workingTasklist" :key="index" class="task">
                <Card :task="data" />
              </li>
            </ul>
          </div>
          <div class="tasklist-wrap">
            <h3 class="condition">Done</h3>
            <ul class="tasklist">
              <li v-for="(data, index) in completedTasklist" :key="index" class="task">
                <Card :task="data" />
              </li>
            </ul>
          </div>
          <div class="tasklist-wrap">
            <h3 class="condition">Pending</h3>
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

import Card from 'components/molecules/Card';
import Desktop from 'components/templates/Desktop';
import SceneHeader from 'components/organisms/SceneHeader';
import Sidemenu from 'components/organisms/Sidemenu';

export default {
  name: 'Top',
  components: { Card, Desktop, SceneHeader, Sidemenu },
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
.tasklist-wrap {
  padding-block-end: 8px;
  padding-block-start: 8px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
}

.main {
  display: grid;
  grid-template-columns: repeat(4, 224px);
  grid-gap: 32px;
  justify-content: center;
}

.condition {
  font-size: 2.4rem;
  line-height: 1;
}

.tasklist {
  margin-block-start: 24px;
}

.task {
  margin-block-end: 24px;
}

.task:last-child {
  margin-block-end: 0;
}
</style>
