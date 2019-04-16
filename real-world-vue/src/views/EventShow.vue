<template>
  <div v-if="loaded">
    <b>{{showname}}</b>
    {{summary}}
  </div>
  <div v-else>Loading ...</div>
</template>


<script>
import eventcard from './EventCard'
import apiClient from '@/services/EventService.js'

export default {
  data() {
    return {
      showname: 'no-name',
      summary: 'no-summary',
      loaded: false
    }
  },
  created() {
    apiClient.getEvent(this.showid).then(response => {
      setTimeout(() => {
        this.showname = response.data.title
        this.summary = response.data.body
        this.loaded = true
      }, 1000)
    })
  },
  components: {
    eventcard
  },
  props: {
    showid: {
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  border: 3px solid blue;
}
</style>
