<template>
  <div class="insurance" :class="{ inversion }">
    <div class="insurance-image">
      <slot name="image" />
    </div>
    <article class="insurance-content">
      <!-- Title wrapper -->
      <div class="insurance-content--group">
        <img class="insurance-content-head__icon" src="@/assets/image/icons/ask.svg" alt="">
        <h3 class="insurance-content__title">
          <slot name="question"></slot>
        </h3>
      </div>

      <!-- decription -->
      <div class="insurance-content-text-wrapper insurance-content--group">
        <img class="insurance-content-text__icon" src="@/assets/image/icons/message.svg" alt="">
        <p class="insurance-content-text">
          <slot name="answer"></slot>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'InsuranceInfo',
  props: {
    inversion: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins';
@import '@/assets/styles/colors';

.inversion.insurance {
  flex-direction: row-reverse;
}

.inversion .insurance-content-text-wrapper:before {
  left: auto;
  right: -82px;
  transform: rotate(180deg);
}

.insurance {
  display: flex;
  align-items: flex-end;

  &-image {
    flex: 1 0 auto;
  }

  &-content {
    padding: 66px 82px 76px 60px;
    background-color: #F0F9FF;

    &--group {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__title {
      @include mixins.setFontParams(800, 26px);
      color: mixins.$textDark;
      margin: 0;
    }

    &-head {
      &__icon {
        margin-right: 74px;
      }
    }

    &-text {
      margin: 0;
      @include mixins.setFontParams(400, 18px);
      color: mixins.$textDark;
      line-height: 1;

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
      }

      &__icon {
        margin-right: 66px;
      }
    }
  }
}
</style>
