<template>
  <div
    v-if="showModal"
    @click="showModal = false"
    class="modal"
  >
    <div @click.stop class="modal-content">
      <!--  Modal Header  -->
      <header class="modal-header">
        <!--  Close Button  -->
        <span @click="showModal = false" class="modal-btn-close" />
        <!--  Title  -->
        <span class="modal-title">
          <slot name="title"></slot>
        </span>
      </header>

      <!--  Form  -->
      <form class="modal-form">
        <slot name="form" />
      </form>

      <!--  Send Form  -->
      <app-button class="modal-btn-send">Отправить</app-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  data() {
    return {
      showModal: true
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_colors.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
  z-index: 5;
  width: 100%;
  min-height: 100vh;

  &-content {
    background: $bgGentle;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    padding: 50px 98px 58px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  &-title {
    @include mixins.setFontParams(600, 26px);
  }

  &-close-btn {
    display: inherit;
    margin: 44px auto 0;
  }

  &-btn {
    &-close {}

    &-send {
      padding: 15px 60px !important;
      margin-top: 44px;
    }
  }
}
</style>
