<template>
  <div class="scene">
    <SceneHeader />
    <Desktop current="top">
      <template slot="main">
        <div class="main">
          <div class="title-wrap">
            <div class="title" v-text="edit.title" />
            <div v-text="toUpperCamelCase(statusLabel)" :class="statusLabel" class="status" />
            <div class="icon-trash" @click="onClickDelete">
              <Icon size="20" icon-color="#f31">
                <IconTrash />
              </Icon>
            </div>
          </div>
          <div class="description" v-text="edit.description" />
          <div class="time-wrap estimated-time-wrap">
            <div class="estimated-time">{{ timeOfString(edit.estimatedTime) }}</div>
            <div class="estimated-time-bar" />
          </div>
          <div class="time-wrap usage-time-wrap">
            <div class="usage-time">{{ timeOfString(edit.usageTime) }}</div>
            <div
              class="usage-time-bar"
              :style="{ width: `${usageTimeOfestimatedTimePercent}%`, maxWidth: '100%' }"
            />
          </div>
        </div>
      </template>
    </Desktop>
  </div>
</template>

<script>
import find from 'lodash/find';
import { mapState, mapGetters, mapActions } from 'vuex';

import convertHoursIntoMinutes from 'utils/convertHoursIntoMinutes';
import Desktop from 'components/templates/Desktop';
import Icon from 'components/atoms/Icon';
import IconTrash from 'components/atoms/Icon/icons/IconTrash';
import SceneHeader from 'components/organisms/SceneHeader';

export default {
  name: 'Detail',
  components: { Desktop, Icon, IconTrash, SceneHeader },
  computed: {
    ...mapState('tasklist', [
      'openTasklist',
      'workingTasklist',
      'completedTasklist',
      'pendingTasklist'
    ]),
    ...mapState('detail', ['edit']),
    ...mapGetters('detail', ['isChanged']),
    statusLabel () {
      switch (this.edit.status) {
        case '1':
          return 'open';
        case '2':
          return 'working';
        case '3':
          return 'done';
        case '9':
          return 'pending';
        default:
          return '';
      }
    },
    usageTimeOfestimatedTimePercent () {
      const convertedEstimatedTimeIntoMintes = convertHoursIntoMinutes(
        this.edit.estimatedTime
      );
      const convertedUsageTimeIntoMintes = convertHoursIntoMinutes(
        this.edit.usageTime
      );

      const usageTimeOfestimatedTime =
        convertedUsageTimeIntoMintes / convertedEstimatedTimeIntoMintes;

      return usageTimeOfestimatedTime * 100;
    }
  },
  mounted () {
    const tasklist = [
      ...this.openTasklist,
      ...this.workingTasklist,
      ...this.completedTasklist,
      ...this.pendingTasklist
    ];

    const dispTask = find(tasklist, ['id', this.$route.params.id]);

    this.setOrigin(dispTask);
    this.setEdit(dispTask);
  },
  methods: {
    ...mapActions('detail', ['setOrigin', 'setEdit']),
    onClickDelete () {},
    toUpperCamelCase (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    timeOfString ({ hours = 0, minutes = 0 }) {
      const zeroPaddedMinutes = `00${minutes}`.slice(-2);
      return `${hours}:${zeroPaddedMinutes}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 800px;
  margin: 0 auto;
}

.title-wrap {
  display: flex;
  align-items: center;
}

.title {
  font-size: 3.2rem;
}

.status {
  border-radius: 4px;
  margin-inline-start: 24px;
  padding: 4px 8px;
}

.open {
  background-color: var(--color-status-open);
}

.working {
  background-color: var(--color-status-working);
}

.done {
  background-color: var(--color-status-done);
}

.pending {
  background-color: var(--color-status-pending);
}

.icon-trash {
  cursor: pointer;
  font-size: 0;
  margin-inline-start: auto;
  padding: 4px 8px;
}

.description {
  height: calc(100vh - 353px);
  line-height: 1.6;
  margin-block-start: 32px;
  overflow: auto;
}

.time-wrap {
  display: flex;
}

.estimated-time-wrap {
  margin-block-start: 16px;
}

.estimated-time-bar {
  width: 100%;
  margin-inline-start: 24px;
  background-color: hsl(156, 100%, 50%);
}

.usage-time-wrap {
  margin-block-start: 8px;
}

.usage-time-bar {
  margin-inline-start: 24px;
  background-color: hsl(214, 100%, 50%);
}
</style>
