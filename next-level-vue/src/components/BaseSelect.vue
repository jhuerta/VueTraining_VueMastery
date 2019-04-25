<template>
  <div>
    <label v-if="label">{{label}}</label>
    <select :value="value" v-bind="$attrs" v-on="vOnMethods">
      <option selected="item===value" v-for="item in items" :key="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, String]
    },
    label: [String],
    items: {
      type: Array,
      default: () => []
    }
  },
  inheritAttrs: false,
  computed: {
    vOnMethods: function() {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function(event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>
