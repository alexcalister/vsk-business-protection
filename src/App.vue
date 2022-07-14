<template>
  <!-- First screen -->
  <div class="first-screen">
    <section class="container first-screen--fon">
      <!-- HEADER -->
      <app-header :links="links"></app-header>
      <div class="first-screen__content">
        <span class="first-screen__content-policy">страховой полис</span>
        <strong class="first-screen__content-def">ВСК «ЗАЩИТА БИЗНЕСА»</strong>
        <h1 class="first-screen__content-title">Комплексное страхование имущества<br>юридических лиц</h1>
      </div>
      <app-button class="first-screen__btn">Оставить заявку</app-button>
    </section>
  </div>

  <!-- Appeal -->
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
        <app-button>Оставить заявку</app-button>
      </div>
    </div>
  </section>

  <!-- Insurance -->
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

  <!-- Exceptions -->
  <section class="exceptions-wrapper container">
    <h2
      class="exceptions-title"
      :class="{ 'no-active': exceptionsShow }"
      @click="changeExceptionsShow"
    >Исключения по видам деятельности</h2>

    <div v-if="exceptionsShow" class="exceptions">
      <div class="exceptions-list">
        <check-list
          :list="exceptionsList.map(exception => exception.title)"
          @update:modelValue="v => exceptionIdx = v"
        />
      </div>

      <div class="exceptions-content">
        <span class="exceptions-content__explanation">
          Исключениями из страхового<br>
          покрытия, являются<br>
          следующие убытки:
        </span>
        <b class="exceptions-content__count">убыток №{{ exceptionIdx + 1 }}</b>
        <p class="exceptions-content__text">{{ activeException.text }}</p>
      </div>
    </div>
  </section>

  <div class="cta-btn">
    <app-button>Оставтиь заявку</app-button>
  </div>

  <app-modal>
    <template #title>
      Заполните форму
    </template>
    <template #form>
      <form-custom-input
        v-for="({placeholder, type, reqiured, value, directive}) of formInputsList"
        :key="placeholder"
        :format="type"
        :required="reqiured"
        :value="value"
        :placeholder="placeholder"
        :arg="directive"
      >
      </form-custom-input>
    </template>
  </app-modal>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppTitle from '@/components/AppTitle'
import InsuranceInfo from './components/InsuranceInfo.vue'
import CheckList from '@/components/CheckList'
import AppModal from '@/components/AppModal'
import FormCustomInput from '@/components/FormCustomInput'

import { PHONE, SCALE } from '@/consts'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppModal,
    AppTitle,
    InsuranceInfo,
    CheckList,
    FormCustomInput
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
      ],

      exceptionIdx: 0,
      exceptionsShow: true,
      exceptionsList: [
        {
          title: 'lorem 1',
          text: 'В целом, конечно, постоянный количественный рост и сфера нашей активности выявляет срочную потребность кластеризации усилий. Задача организации, в особенности же высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений. Наше дело не так однозначно, как может показаться: границ'
        },
        {
          title: 'lorem 2'
        },
        {
          title: 'lorem 3 '
        },
        {
          title: 'lorem 4'
        },
        {
          title: 'lorem 5'
        },
        {
          title: 'lorem 6'
        }
      ],

      formInputsList: [
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'Принципал',
          directive: `${SCALE}-3`
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'ИНН Принципала',
          directive: `${SCALE}-3`
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'Бенефициар'
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'ИНН Бенефициара',
          directive: `${SCALE}-5`
        },
        {
          type: 'input',
          reqiured: false,
          value: '',
          placeholder: 'Ссылка на закупку'
        },
        {
          type: 'select',
          value: ['44-ФЗ', '223-ФЗ', '185-ФЗ (615-ПП)'],
          placeholder: 'Вид контрактов'
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'Срок гарантии'
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'Имя'
        },
        {
          type: 'input',
          reqiured: true,
          value: '',
          placeholder: 'Телефон',
          directive: PHONE
        },
        {
          type: 'input',
          reqiured: false,
          value: '',
          placeholder: 'Электронная почта'
        }
      ]
    }
  },
  computed: {
    activeException() {
      return this.exceptionsList[this.exceptionIdx]
    }
  },
  methods: {
    changeExceptionsShow() {
      this.exceptionsShow = !this.exceptionsShow
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

.exceptions {
  display: flex;
  justify-content: space-between;

  &-wrapper {
    margin: 60px auto 70px;
  }

  &-title {
    position: relative;
    @include mixins.setFontParams(800, 48px);
    color: $textAccent;
    display: block;
    width: max-content;
    margin: 0 auto 130px;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -37px;
      width: 15px;
      height: 15px;
      transform: translateY(130%) rotate(-45deg);
      border-top: 2px solid $textDark;
      border-right: 2px solid $textDark;
      transition: 0.3s ease;
    }

    &.no-active:after {
      transform: translateY(130%) rotate(135deg);
    }
  }

  &-list {
    flex: 1 0 calc(50% - 57px);
    margin: 0 57px 0 0;
    padding: 0;
  }

  &-content {
    flex: 1 0 calc(50% - 57px);
    margin: 0 0 0 57px;

    &__explanation {
      position: relative;
      color: $textAccent;
      @include mixins.setFontParams(800, 30px);
      line-height: 1;
      margin-bottom: 42px;
      display: inline-block;

      &:before {
        content: '';
        position: absolute;
        background: #0984D7;
        height: calc(100% + 10px);
        width: 4px;
        left: -24px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &__count {
      position: relative;
      display: inline-block;
      @include mixins.setFontParams(900, 45px);
      margin: 40px 0 48px;

      &:after {
        content: '';
        position: absolute;
        width: 385px;
        height: 385px;
        background-image: url("@/assets/image/other/target.svg");
        background-repeat: no-repeat;
        top: 0;
        right: 0;
        background-size: cover;
        transform: translate(85%, -57px);
      }
    }

    &__text {
      @include mixins.setFontParams(400, 24px);
      max-width: 450px;
      margin: 0;
    }
  }
}

.cta-btn {
  display: flex;
  justify-content: center;
  margin: 130px auto 112px;
}
</style>
