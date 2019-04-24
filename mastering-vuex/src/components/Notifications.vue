<template>
  <span>
    **
    <notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </span>
</template>

<script>
import notification from '@/components/Notification.vue'

export default {
  components: {
    notification
  },
  props: {
    notifications: {
      type: Array,
      required: true
    }
  }
}
</script>
