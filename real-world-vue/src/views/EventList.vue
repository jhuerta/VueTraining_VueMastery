<template>
  <div>
    <div>Events Listening</div>
    <div v-for="event in eventList" :key="event.id">
      <router-link :to="{name:'eventshow', params: {showid: event.id}}">{{ event.name }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventList: [
        { id: 0, name: 'css' },
        { id: 1, name: 'c++' },
        { id: 2, name: 'html' },
        { id: 3, name: 'js' },
        { id: 4, name: 'c#' }
      ]
    }
  }
}
</script>
