<template>
  <input
    v-if="format === 'input'"
    :value="value"
    :placeholder="setPlaceholder"
    class="custom-input"
    type="text">
  <div v-else-if="format === 'select'"></div>
</template>

<script>
export default {
  name: 'AppCustomInput',
  props: {
    format: {
      validator(value) {
        return ['select', 'input'].includes(value)
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    value: [String, Object],
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    setPlaceholder() {
      return `${this.placeholder}${this.required ? '*' : ''}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors';
.custom-input {
  border: 2px solid #94C7E9;
  border-radius: 30px;
  background-color: $textWhite;
  padding: 21px 27px;

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder  {color:#C5C5C5;}

  color: $textDark;
}
</style>
