<template>
  <span class="section-heading" :class="{ inversion }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    inversion: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@import '@/assets/styles/colors';

.section-heading {
  @include mixins.setFontParams(800, 50px);
  color: $textAccent;
  margin-bottom: 86px;
  position: relative;
  display: block;

  &:after {
   content: '';
   position: absolute;
   bottom: -30px;
   left: 0;
   width: 90px;
   height: 3px;
   background: $textAccentDark;
 }

  &.inversion {
    text-align: right;

    &:after {
      left: auto;
      right: 0;
    }
  }
}
</style>
