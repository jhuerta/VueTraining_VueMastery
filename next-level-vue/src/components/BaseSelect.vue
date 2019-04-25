<template>
  <div>
    <label v-if="label">{{label}}</label>
    <select :value="value" v-bind="$attrs" v-on="listeners">
      <option v-for="item in items" :value="item" :key="item" selected="item===value">{{ item }}</option>
    </select>
  </div>
</template>

<script>
import { commonBaseComponentFields } from '../mixins/CommonBaseComponent'
export default {
  mixins: [commonBaseComponentFields],
  /* THERE HAS BEEN A TON OF CODE THAT IS IN THE MIXIN!!!*/
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
  /* This computed way of doing things is easier to visualize and remember*/

  // computed: {
  //   vOnMethods: function() {
  //     var vm = this
  //     // `Object.assign` merges objects together to form a new object
  //     return Object.assign(
  //       {},
  //       // We add all the listeners from the parent
  //       this.$listeners,
  //       // Then we can add custom listeners or override the
  //       // behavior of some listeners.
  //       {
  //         // This ensures that the component works with v-model
  //         input: function(event) {
  //           vm.$emit('input', event.target.value)
  //         }
  //       }
  //     )
  //   }
  // }
}
</script>
