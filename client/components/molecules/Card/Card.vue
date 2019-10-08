<template>
  <div class="card">
    <div class="title-wrap">
      <h3 v-text="task.title" class="title" />
      <div class="icon-select">
        <Icon size="10">
          <IconSelect />
        </Icon>
      </div>
    </div>
    <p v-text="task.description" class="description" />
  </div>
</template>

<script>
import Icon from 'components/atoms/Icon';
import IconSelect from 'components/atoms/Icon/icons/IconSelect';

export default {
  name: 'Card',
  components: { Icon, IconSelect },
  props: {
    task: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--color-background-content);
  border-radius: 8px;
  color: var(--color-text-inverse);
  height: 104px;
  overflow: hidden;
  padding-block-end: 8px;
  padding-block-start: 8px;
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
