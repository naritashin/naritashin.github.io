<template>
  <div class="select-option">
    <span @click="onClickSelectOption">
      <Icon size="10">
        <IconSelect />
      </Icon>
    </span>
    <template v-if="isShownOptions">
      <div class="options-wrap">
        <div class="option">Edit</div>
        <div class="option">Status</div>
        <div class="option">Working time</div>
        <div class="option caution">Delete</div>
      </div>
      <div class="disp-lock" @click.stop="onCloseOptions" />
    </template>
  </div>
</template>

<script>
import Icon from 'components/atoms/Icon';
import IconSelect from 'components/atoms/Icon/icons/IconSelect';

export default {
  name: 'SelectOption',
  components: { Icon, IconSelect },
  data () {
    return {
      isShownOptions: false
    };
  },
  methods: {
    onClickSelectOption () {
      this.isShownOptions = true;
    },
    onCloseOptions () {
      this.isShownOptions = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.select-option {
  position: relative;
}

.options-wrap {
  background: #fcfcfa;
  border-radius: 4px;
  box-shadow: var(--shadow-position-default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block-end: 8px;
  padding-block-start: 8px;
  position: absolute;
  right: -12px;
  top: calc(100% + 8px);
  width: 149px;
  z-index: 11;
}

.option {
  font-size: 1.6rem;
  line-height: 32px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
}

.option:hover {
  background-color: hsl(0, 0%, 93%);
}

.option.caution {
  color: hsl(9, 100%, 53%);
}

.disp-lock {
  position: fixed;
  width: 100vw;
  height: 100vh;
  cursor: default;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
