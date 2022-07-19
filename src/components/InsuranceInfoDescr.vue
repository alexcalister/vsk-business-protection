<template>
  <!-- Title wrapper -->
  <div class="insurance-content--group">
    <img class="insurance-content-head__icon" src="@/assets/image/icons/ask.svg" alt="">
    <h3 class="insurance-content__title">
      <span>
        <slot name="question"></slot>
      </span>
    </h3>
  </div>

  <div v-bind="$attrs" class="insurance-content-text-wrapper insurance-content--group">
    <!-- decription -->
    <img class="insurance-content-text__icon" src="@/assets/image/icons/message.svg">
    <p class="insurance-content-text">
      <slot name="answer"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'InsuranceInfoDescr',
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
@use '@/assets/styles/colors';

.insurance-content {
  &--group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__title {
    position: relative;
    @include mixins.setFontParams(800, 26px);
    color: colors.$textDark;
    margin: 0;

    span {
      position: relative;
      z-index: 1;
    }

    &:after{
      content: '';
      position: absolute;
      background-image: url("@/assets/image/icons/quotes.svg");
      background-repeat: no-repeat;
      left: -47px;
      top: -27px;
      width: 80px;
      height: 63px;
      z-index: 0;
    }
  }

  &-head {
    &__icon {
      margin-right: 74px;
    }
  }

  &-text {
    margin: 0;
    @include mixins.setFontParams(400, 18px);
    color: colors.$textDark;
    line-height: 1;

    &__icon {
      margin-right: 66px;
    }

    &-wrapper {
      position: relative;
      margin-top: 70px;

      &:before {
        content: '';
        position: absolute;
        background-image: url("@/assets/image/other/square.png");
        width: 70%;
        height: 6px;
        left: -60px;
        top: -38px;
        background-repeat: space;
      }

      &.inversion {
        :before {
          left: auto;
          right: -82px;
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
