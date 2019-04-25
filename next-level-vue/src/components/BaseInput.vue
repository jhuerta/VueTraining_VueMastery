<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input @input="updateValue" :value="value" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  }
}
</script>
