<template>
  <div class="card-large">
    <div class="title-wrap">
      <h3 v-text="task.title" class="title" />
      <div class="icon-select">
        <SelectOption />
      </div>
    </div>
    <p v-text="task.description" class="description" />
    <div class="time-wrap estimated-time-wrap">
      <div class="estimated-time">{{ timeOfString(task.estimatedTime) }}</div>
      <div class="estimated-time-bar" />
    </div>
    <div class="time-wrap usage-time-wrap">
      <div class="usage-time">{{ timeOfString(task.usageTime) }}</div>
      <div
        class="usage-time-bar"
        :style="{ width: `${usageTimeOfestimatedTimePercent}%`, maxWidth: '100%' }"
      />
    </div>
  </div>
</template>

<script>
import SelectOption from './SelectOption';

const convertHoursIntoMinutes = ({ minutes = 0, hours = 0 }) => {
  const minutesOfHours = Math.floor(hours * 60);

  return minutes + minutesOfHours;
};

export default {
  name: 'Card',
  components: { SelectOption },
  props: {
    task: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  filters: {},
  computed: {
    usageTimeOfestimatedTimePercent () {
      const convertedEstimatedTimeIntoMintes = convertHoursIntoMinutes(
        this.task.estimatedTime
      );
      const convertedUsageTimeIntoMintes = convertHoursIntoMinutes(
        this.task.usageTime
      );

      const usageTimeOfestimatedTime =
        convertedUsageTimeIntoMintes / convertedEstimatedTimeIntoMintes;

      return usageTimeOfestimatedTime * 100;
    }
  },
  methods: {
    timeOfString ({ hours = 0, minutes = 0 }) {
      const zeroPaddedMinutes = `00${minutes}`.slice(-2);
      return `${hours}:${zeroPaddedMinutes}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-large {
  background-color: var(--color-background-content);
  border-radius: 8px;
  color: var(--color-text-inverse);
  height: 208px;
  padding-block-end: 8px;
  padding-block-start: 8px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
  text-overflow: ellipsis;
  width: 384px;
}

.title-wrap {
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-select {
  cursor: pointer;
  margin-inline-start: 8px;
}

.description {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-height: 1.4;
  overflow: hidden;
  margin-block-start: 12px;
  word-break: break-all;
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
