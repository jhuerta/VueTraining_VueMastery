<template>
  <div>
    <div style="border: 2px solid green;margin: 15px;padding: 15px">
      <div><b> Tempalte Id:</b> {{ this.$route.params.id }}</div>
      <div><b>Title:</b> {{ event.title }}</div>
    </div>
    <event-card :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  // computed: {
  //   id() {
  //     return this.$route.params.id
  //   }
  // },
  components: {
    'event-card': EventCard
  },
  async asyncData({ $axios, error, params }) {
    try {
      const fetchEvents = await $axios.get(
        'http://localhost:3001/events/' + params.id
      )
      return { event: fetchEvents.data }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #id:' + params.id + ' at this time'
      })
    }
  },
  head() {
    return {
      title: 'Page Even: ' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'create name create name create name',
          content:
            'Event ' +
            this.event.id +
            ': create content create content create content. Title: ' +
            this.event.title
        }
      ]
    }
  }
}
</script>
