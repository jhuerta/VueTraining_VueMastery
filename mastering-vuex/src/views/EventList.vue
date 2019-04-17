<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  computed: {
    events() {
      // return this.$store.state.events
      return this.$store.getters.events
    }
  },
  created() {
    this.$store.dispatch('initializeEvents')
  }
}
</script>
