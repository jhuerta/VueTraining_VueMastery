<template>
  <span>
    <a href="#" @click="newEvent()">New Random Event</a>
  </span>
</template>

<script>
export default {
  methods: {
    randomString(length) {
      var text = ''
      var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    },

    newEvent() {
      const id = Math.floor(Math.random() * 1000000)
      var newRandomEvent = {
        id: id,
        category: '',
        organizer: 'some user',
        title: this.randomString(10),
        description: this.randomString(20),
        location: this.randomString(5),
        date: '',
        time: '',
        attendees: []
      }
      this.$store.dispatch('eventStore/createEvent', newRandomEvent)
    }
  }
}
</script>
