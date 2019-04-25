<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
import { commonBaseComponentFields } from '../mixins/CommonBaseComponent'
export default {
  mixins: [commonBaseComponentFields]
  /* ALL THE CODE BELOW IS SUBSTITUTED BY THE MIXIN!!! */
  /*
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
  */
}
</script>
