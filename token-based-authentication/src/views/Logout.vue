<template>
  <a v-if="isLoggedIn" class="button" @click="logout">
    Log Out
  </a>
</template>

<script>
import { authComputed } from '@/state/helpers.js'

export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(this.$router.push({ name: 'home' }))
    }
  }
}
</script>
