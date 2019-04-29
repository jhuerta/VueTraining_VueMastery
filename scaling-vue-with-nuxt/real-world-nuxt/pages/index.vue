<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  components: {
    'event-card': EventCard
  },
  head() {
    return {
      title: '!! Event Listing'
    }
  },
  // asyncData using async/await pattern (below using then promises)
  async asyncData({ $axios, error }) {
    try {
      const fetchEvents = await $axios.get('http://localhost:3001/events')
      return { events: fetchEvents.data }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time'
      })
    }
  }

  // asyncData({ $axios, error }) {
  //   return $axios
  //     .get('http://localhost:3001/events')
  //     .then(response => {
  //       return { events: response.data }
  //     })
  //     .catch(e => {
  //       error({
  //         statusCode: 503,
  //         message: 'Unable to fetch events at this time'
  //       })
  //     })
  // }
  // This code below is equivalent to the one above
  // asyncData(context) {
  //   return context.$axios.get('http://localhost:3001/events').then(response => {
  //     return { events: response.data }
  //   })
  // }
}
</script>
