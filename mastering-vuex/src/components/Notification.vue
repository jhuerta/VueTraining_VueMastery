<template>
  <div>{{notification.id}}. {{notification.message}}</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  mounted() {
    this.timeout = setTimeout(() => {
      // Using the map action
      this.deleteNotification(this.notification)

      // Using the store object
      //   this.$store.dispatch('notificationStore/remove', this.notification, {
      //     root: true
      //   })
    }, 2500)
  },
  data() {
    return {
      timeout: null
    }
  },

  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('notificationStore', { deleteNotification: 'remove' })
  }
}
</script>
