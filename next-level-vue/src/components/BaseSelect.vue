<template>
  <div>
    <label v-if="label">{{label}}</label>
    <select @input="updateValue" :value="value" v-bind="$attrs">
      <option selected="item===value" v-for="item in items" :key="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: [String],
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  inheritAttrs: false
}
</script>
