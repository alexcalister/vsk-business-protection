<template>
  <!-- First screen -->
  <div class="first-screen">
    <section class="container first-screen--fon">
      <!-- HEADER -->
      <app-header />
      <div class="first-screen__content">
        <span class="first-screen__content-policy">страховой полис</span>
        <strong class="first-screen__content-def">ВСК «ЗАЩИТА БИЗНЕСА»</strong>
        <h1 class="first-screen__content-title">Комплексное страхование имущества<br>юридических лиц</h1>
      </div>
      <app-button @click="openModalForm" class="first-screen__btn">Оставить заявку</app-button>
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
        <app-button @click="openModalForm">Оставить заявку</app-button>
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
      <insurance-info-descr>
        <template #answer>
          Имущественные интересы Страхователя, связанные с риском возникновения убытков от предпринимательской деятельности, возникших в результате неисполнения (ненадлежащего исполнения) контрагентами Страхователя (Принципалами), своих обязательств по договорам о предоставлении банковской гарантии/гарантий, выдаваемых в рамках 223-ФЗ и 44-ФЗ,  перечень которых будет указываться и дополняться Сторонами .
        </template>
        <template #question>Здесь какой-то вопрос, связанный со страховкой и раскрывающий суть уникального предложения?</template>
      </insurance-info-descr>
    </insurance-info>

    <app-title inversion>От чего застраховано</app-title>
    <!-- SECOND Item -->
    <insurance-info inversion class="insurance-item">
      <template #image>
        <img
          class="insurance-item__image"
          src="@/assets/image/main-content-2.png"
          alt="От чего застраховано"
          title="От чего застраховано"
        >
      </template>
      <insurance-info-descr>
        <template #answer>Риска возникновения убытков у Страхователя из-за нарушения контрагентом Страхователя (Принципалом) обязательств по возмещению Страхователю денежных сумм, выплаченных в пользу Бенефициара по Гарантии (либо взысканных со Страхователя Бенефициаром по гарантии в бесспорном порядке), выданной в соответствии с условиями Договора о предоставлении банковских гарантий.</template>
        <template #question>Здесь какой-то вопрос, связанный со страховкой и раскрывающий суть уникального предложения?</template>
      </insurance-info-descr>
    </insurance-info>
  </section>

  <!-- Exceptions -->
  <section class="exceptions-wrapper container">
    <h2
      class="exceptions-title"
      @click="changeExceptionsShow"
    >
      Исключения по видам деятельности
      <indicator-arrow
        :rotate="exceptionsShow"
        class="exceptions-arrow"
      />
    </h2>

    <div v-show="exceptionsShow" class="exceptions">
      <div class="exceptions-list">
        <check-list-wrapper>
          <check-list
            v-for="(_, idx) of exceptionsList"
            :key="idx"
            :listLength="exceptionsList.length"
            :text="exceptionsList[idx].title"
            :idx="idx"
            :exceptionIdx="exceptionIdx"
            @update:modelValue="v => exceptionIdx = v"
          />
        </check-list-wrapper>
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
    <app-button @click="openModalForm">Оставить заявку</app-button>
  </div>

  <app-footer />

  <app-modal ref="modalForm">
    <template #title>
      Заполните форму
    </template>
    <template #form>
      <template
        v-for="({placeholder, type, reqiured, value, picked}, idx) of formInputsList"
        :key="placeholder"
      >
        <form-custom-input
          v-if="type === $options.formTypes.input"
          :format="type"
          :required="reqiured"
          :placeholder="placeholder"
          :modelValue="value"
          @update:modelValue="v => formInputsList[idx].value = v"
          class="form-field"
        />
        <form-custom-input
          v-else-if="type === $options.formTypes.choice"
          :format="type"
          :required="reqiured"
          :placeholder="placeholder"
          :valuesList="value"
          :modelValue="picked"
          @update:modelValue="v => formInputsList[idx].picked = v"
          class="form-field"
        />
      </template>
    </template>
  </app-modal>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter'
import AppTitle from '@/components/AppTitle'
import InsuranceInfo from '@/components/InsuranceInfo.vue'
import InsuranceInfoDescr from '@/components/InsuranceInfoDescr'
import CheckListWrapper from '@/components/CheckListWrapper'
import CheckList from '@/components/CheckList'
import AppModal from '@/components/AppModal'
import FormCustomInput from '@/components/FormCustomInput'
import IndicatorArrow from '@/components/IndicatorArrow'
import {
  FORM_TYPE_INPUT,
  FORM_TYPE_CHOICE
} from '@/consts'

export default {
  name: 'HomePage',
  components: {
    CheckListWrapper,
    AppHeader,
    AppFooter,
    AppModal,
    AppTitle,
    InsuranceInfo,
    InsuranceInfoDescr,
    CheckList,
    FormCustomInput,
    IndicatorArrow
  },
  formTypes: {
    input: FORM_TYPE_INPUT,
    choice: FORM_TYPE_CHOICE
  },
  data() {
    return {
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
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'Принципал'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'ИНН Принципала'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'Бенефициар'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'ИНН Бенефициара'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: false,
          value: '',
          placeholder: 'Ссылка на закупку'
        },
        {
          type: FORM_TYPE_CHOICE,
          value: ['44-ФЗ', '223-ФЗ', '185-ФЗ (615-ПП)'],
          picked: null,
          placeholder: 'Вид контрактов'
        },
        {
          type: FORM_TYPE_CHOICE,
          placeholder: 'Тип гарантии',
          picked: null,
          value: ['Для участия в конкурсе', 'Для заключения контракта', 'Для получения аванса', 'Для обеспечения гарантийных обязательств']
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'Срок гарантии'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'Имя'
        },
        {
          type: FORM_TYPE_INPUT,
          reqiured: true,
          value: '',
          placeholder: 'Телефон'
        },
        {
          type: FORM_TYPE_INPUT,
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
    },
    async openModalForm() {
      const send = await this.$refs.modalForm.open()
      if (send) {
        console.log('res await :', send)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

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
    color: colors.$textWhite;
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
    color: colors.$textAccentDark;
    text-align: center;
  }

  &-info {
    margin-top: 60px;
    display: flex;
    border: 2px solid colors.$grayWhite;
    box-shadow: 0px 6px 12px rgba(colors.$textDark, 0.1);
    border-radius: 22px;
    overflow: hidden;

    &__img {
      object-fit: cover;
    }

    &-content {
      padding: 66px 100px 66px 58px;
      color: colors.$textDark;
    }

    &__title {
      @include mixins.setFontParams(600, 28px);
      margin: 0 0 30px;
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
    color: colors.$textAccent;
    display: block;
    width: max-content;
    margin: 0 auto 130px;
    cursor: pointer;
  }

  &-arrow {
    margin-left: 37px;
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
      color: colors.$textAccent;
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

.form-field {
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
