<template>
  <ul class="abstract-list">
    <li
      v-for="(item, idx) of list"
      class="abstract-list__item"
      :class="{ active: exceptionIdx === idx}"
      :style="{
        'border-bottom': idx === list.length - 1 || idx === list.length - 2
          ? '' : '2px solid #E5E5E5'
      }"
      :key="idx"
      :data-num="idx + 1"
      @click="setActiveItem(idx)"
    >
      {{ item }}
      <b
        :class="{ active: exceptionIdx === idx}"
        class="abstract-list__item-num"
      >{{ idx + 1 }}</b>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CheckList',
  emits: {
    'update:modelValue': v => typeof v === 'number'
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      exceptionIdx: 0
    }
  },
  methods: {
    setActiveItem(idx) {
      this.exceptionIdx = idx
      this.$emit('update:modelValue', this.exceptionIdx)
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_colors.scss";

.abstract-list {
  display: flex;
  width: 100%;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 17px 14px 15px 20px;
    flex-basis: calc(50% - 34px);
    color: $textDark;
    box-shadow: 0 -3px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &.active {
      color: $textWhite;
      background-color: $accentDark;
      box-shadow: -6px 0 24px rgba(0, 111, 186, 0.3);
    }

    &-num {
      color: $textGray;
      @include mixins.setFontParams(800, 70px);
      line-height: 1;

      &.active {
        color: $textLighten;
      }
    }
  }
}
</style>
