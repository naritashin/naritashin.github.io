<template>
  <div class="card" @click.stop="onClickEdit">
    <div class="title-wrap">
      <h3 v-text="task.title" class="title" />
      <div class="icon-select">
        <SelectOption
          @clickEdit="onClickEdit"
          @clickStatus="onClickStatus"
          @clickWorkingTime="onClickWorkingTime"
          @clickDelete="onClickDelete"
        />
      </div>
    </div>
    <p v-text="task.description" class="description" />
  </div>
</template>

<script>
import SelectOption from './SelectOption';

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
  methods: {
    onClickEdit () {
      this.$emit('clickEdit', this.task.id);
    },
    onClickStatus () {
      this.$emit('clickStatus', this.task.id);
    },
    onClickWorkingTime () {
      this.$emit('clickWorkingTime', this.task.id);
    },
    onClickDelete () {
      this.$emit('clickDelete', this.task.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--color-background-content);
  border-radius: 8px;
  color: var(--color-text-inverse);
  cursor: pointer;
  height: 108px;
  padding-block-end: 8px;
  padding-block-start: 12px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
  text-overflow: ellipsis;
  width: 192px;
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
  -webkit-line-clamp: 2;
  line-height: 1.4;
  overflow: hidden;
  margin-block-start: 12px;
  word-break: break-all;
}
</style>
