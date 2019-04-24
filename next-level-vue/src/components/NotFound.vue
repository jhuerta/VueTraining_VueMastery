<template>
  <div>
    <h1>{{resource}} NOT FOUND</h1>
    <div>The page you are lookig forfor is not here</div>
    <router-link :to="{name: 'event-list' }">Back to home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>