<template>
  <div>{{summary}}</div>
</template>


<script>
import eventcard from './EventCard'

export default {
  components: {
    eventcard
  },
  props: {
    showid: {
      default: 0
    },
    showname: {
      default: 'no-name'
    },
    summary: {
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  border: 3px solid blue;
}
</style>
