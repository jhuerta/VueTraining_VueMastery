export const commonBaseComponentFields = {
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
    label: [String],
    value: [String, Number]
  }
}
