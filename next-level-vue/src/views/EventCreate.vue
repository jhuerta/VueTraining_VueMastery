<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        @change="dosomething"
        label="Select a category"
        class="field"
        v-model="event.category"
        :items="categories"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        label="Title"
        placeholder="Add an event title"
        v-model="event.title"
        type="text"
        class="field"
      />

      <BaseInput
        label="Description"
        placeholder="Add a description"
        v-model="event.description"
        type="text"
        class="field"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        label="Location"
        placeholder="Add a location"
        v-model="event.location"
        type="text"
        class="field"
      />

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>
      <BaseSelect label="Select a time" class="field" v-model="event.time" :items="times"/>

      <!-- <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>-->

      <input type="submit" class="button -fill-gradient" value="Submit">
    </form>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      NProgress.start()
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          // NProgress.done() : Optional, it will be started/stoped in the event-show
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          NProgress.done()
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
