<template>
  <div>
    <h1>NETWORK PROBLEMS</h1>
    <div>
      <b>Description:</b>
      {{info}}
    </div>
    <router-link :to="{name: 'event-list' }">Back to home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
