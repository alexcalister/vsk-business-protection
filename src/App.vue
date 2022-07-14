<template>
  <div class="first-screen">
    <section class="container first-screen--fon">
      <!-- HEADER -->
      <app-header :links="links"></app-header>
      <div class="first-screen__content">
        <span class="first-screen__content-policy">страховой полис</span>
        <strong class="first-screen__content-def">ВСК «ЗАЩИТА БИЗНЕСА»</strong>
        <h1 class="first-screen__content-title">Комплексное страхование имущества<br>юридических лиц</h1>
      </div>
      <app-button class="first-screen__btn" />
    </section>
  </div>
  <section class="appeal container">
    <h2 class="appeal-title">
      Страхование предпринимательских рисков на случай неисполнения/ненадлежащего
      исполнения обязательств по договорам о предоставлении банковских гарантий
    </h2>

    <div class="appeal-info">
      <img class="appeal-info__img" src="@/assets/image/grass.jpg" alt="grass" title="grass">

      <div class="appeal-info-content">
        <h3 class="appeal-info__title">Lorem ipsum информация заголовок</h3>
        <p class="appeal-info__description">Sed nisi lacus sed viverra tellus in. Euismod elementum nisi quis eleifend quam adipiscing vitae.</p>
        <app-button />
      </div>
    </div>
  </section>
  <section class="insurance-wrapper container">
    <app-title>Что застраховано</app-title>
    <!-- FIRST Item -->
    <insurance-info class="insurance-item insurance-item--mb">
      <template #image>
        <img
          class="insurance-item__image"
          src="@/assets/image/main-content-1.png"
          alt="Что застраховано"
          title="Что застраховано"
        >
      </template>
      <template #question>Здесь какой-то вопрос, связанный со страховкой и раскрывающий суть уникального предложения?</template>
      <template #answer>
        Имущественные интересы Страхователя, связанные с риском возникновения убытков от предпринимательской деятельности, возникших в результате неисполнения (ненадлежащего исполнения) контрагентами Страхователя (Принципалами), своих обязательств по договорам о предоставлении банковской гарантии/гарантий, выдаваемых в рамках 223-ФЗ и 44-ФЗ,  перечень которых будет указываться и дополняться Сторонами .
      </template>
    </insurance-info>

    <app-title :inversion="true">От чего застраховано</app-title>
    <!-- SECOND Item -->
    <insurance-info :inversion="true" class="insurance-item">
      <template #image>
        <img
          class="insurance-item__image"
          src="@/assets/image/main-content-2.png"
          alt="От чего застраховано"
          title="От чего застраховано"
        >
      </template>
      <template #question>Здесь какой-то вопрос, связанный со страховкой и раскрывающий суть уникального предложения?</template>
      <template #answer>Риска возникновения убытков у Страхователя из-за нарушения контрагентом Страхователя (Принципалом) обязательств по возмещению Страхователю денежных сумм, выплаченных в пользу Бенефициара по Гарантии (либо взысканных со Страхователя Бенефициаром по гарантии в бесспорном порядке), выданной в соответствии с условиями Договора о предоставлении банковских гарантий.
      </template>
    </insurance-info>
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppTitle from '@/components/AppTitle'
import InsuranceInfo from './components/InsuranceInfo.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    InsuranceInfo,
    AppTitle
  },
  pageSectionsLinks: {
    insurance: 'insurance-products',
    aboutUs: 'about-us',
    partners: 'partners',
    contacts: 'contacts'
  },
  data() {
    return {
      links: [
        {
          name: 'Страховые продукты',
          path: this.$options.pageSectionsLinks.insurance
        },
        {
          name: 'О нас',
          path: this.$options.pageSectionsLinks.aboutUs
        },
        {
          name: 'Партнеры',
          path: this.$options.pageSectionsLinks.partners
        },
        {
          name: 'Контакты',
          path: this.$options.pageSectionsLinks.contacts
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins';
@import '@/assets/styles/colors';

.first-screen {
  background: linear-gradient(101.7deg, #B8E3FF -2.28%, #88CFFA 134.55%);

  &--fon {
    padding: 35px 0 110px 0;
    background-image: url('@/assets/image/first-screen-content.png');
    background-position: center right;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__content {
    margin-top: 150px;
    color: $textWhite;
    @include mixins.setFontParams(600);

    &-policy {
      font-size: 54px;
    }

    &-def {
      font-size: 63px;
      display: block;
    }

    &-title {
      font-weight: 500;
      font-size: 24px;
      margin-top: 49px;
    }
  }

  &__btn {
    margin-top: 35px;
  }
}

.appeal {
  padding: 62px 0;

  &-title {
    @include mixins.setFontParams(700, 40px);
    color: $textAccentDark;
    text-align: center;
  }

  &-info {
    margin-top: 60px;
    display: flex;
    border: 2px solid #DFDFDF;
    box-shadow: 0px 6px 12px rgba($textDark, 0.1);
    border-radius: 22px;
    overflow: hidden;

    &__img {
      object-fit: cover;
    }

    &-content {
      padding: 66px 100px 66px 58px;
      color: $textDark;
    }

    &__title {
      @include mixins.setFontParams(600, 28px);
      margin: 0;
      margin-bottom: 30px;
      display: inline-block;
    }

    &__description {
      display: inline-block;
      @include mixins.setFontParams(500, 18px);
      margin-bottom: 30px;
      margin-top: 0;
    }
  }
}

.insurance {
  &-wrapper {
    margin: 60px auto;
  }

  &-item {
    &--mb {
      margin-bottom: 96px;
    }
    &__image {
      display: flex;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
