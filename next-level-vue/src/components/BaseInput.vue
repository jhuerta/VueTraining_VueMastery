<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
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
