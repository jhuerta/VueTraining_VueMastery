<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ thisEvent.time }} on {{ thisEvent.date }}</span>
      <h1 class="title">{{ thisEvent.title }}</h1>
      <h5>Organized by {{ thisEvent.organizer ? thisEvent.organizer.name : 'no organizer' }}</h5>
      <h5>Category: {{ thisEvent.category }}</h5>
    </div>

    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>

    <address>{{ thisEvent.location }}</address>

    <h2>Event details</h2>
    <p>{{ thisEvent.description }}</p>

    <h2>
      Attendees
      <span
        class="badge -fill-gradient"
      >{{ thisEvent.attendees ? thisEvent.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in thisEvent.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  created() {
    // this.$store.dispatch('eventStore/fetchEvent', this.id)
    this.mappedActionFetchEvent(this.id)
  },
  // computed: mapState(['eventStore'])
  // This way of decalring the state is equivalent to the one above,
  // but allows to use event.XXX instead of evenStore.event.XXX
  computed: mapState({
    thisEvent: state => state.eventStore.event
  }),
  // different alterantives to map actions
  methods: mapActions({ mappedActionFetchEvent: 'eventStore/fetchEvent' })
  // mapActions('eventStore', ['fetchEvent'])
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
