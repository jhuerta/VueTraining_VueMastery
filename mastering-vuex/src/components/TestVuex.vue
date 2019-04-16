<template>
  <div>
    Add Number:
    <input type="number" v-model.number="incrementBy">
    <button @click="incrementCount">Increment</button>
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incrementBy: 0
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('incrementCount', this.incrementBy)
    }
  }
}
</script>
