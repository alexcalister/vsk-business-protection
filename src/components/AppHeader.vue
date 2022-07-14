<template>
  <header class="header">
    <slot name="image">
      <img class="header-logo" src="@/assets/image/vsk-logo.png" alt="страховой дом VSK" title="страховой дом VSK">
    </slot>
    <nav class="header-links">
      <span
        class="header-links__route"
        v-for="{ name, path } of links"
        :key="name"
        :to="`/#${path}`"
      >{{ name }}</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    links: {
      type: Array,
      default: () => ([]),
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/colors';
@use '@/assets/styles/mixins';

.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  &-logo {
    height: 48px;
  }

  &-links {
    margin-left: 190px;
    display: flex;

    &__route {
      color: #3F4042;
      cursor: pointer;
      @include mixins.setFontParams(400, 18px);

      &:not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

</style>
