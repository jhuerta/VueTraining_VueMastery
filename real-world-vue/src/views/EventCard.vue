
<template>
  <div>
    <span class="eyebrow">{{id}}</span>
    <h4>{{title}}</h4>
    <span>Subtitle</span>
    <router-link :to="{name:'eventshow', params: {showid: id}}">More...</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  props: {
    id: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: 'no-name'
    },
    description: {
      type: String,
      default: 'no-name'
    }
  }
  // data() {
  //   return {
  //     title: 'Park Cleanup'
  //   }
  // }
}
</script>

<style lang="scss" scoped>
$primary-color: green;
$font-size: 15px;

h4 {
  color: $primary-color;
  font-size: $font-size;
}
</style>
