<template>
  <div>
    <h1>Info on : {{ eventname }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    eventname() {
      return this.$route.params.eventname
    }
  }
}
</script>
