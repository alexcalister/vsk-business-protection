<template>
  <div v-if="format === 'input'">
    <input
      :value="value"
      :placeholder="`${placeholder}${required ? '*' : ''}`"
      type="text">
  </div>
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
    },
    arg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
