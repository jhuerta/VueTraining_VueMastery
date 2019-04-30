<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if='!isLoggedIn'>
    To use the application, either 
    <router-link to="/login">login</router-link> or <router-link to="/register">register</router-link>
    </div>
  </div>
</template>

<script>
import {authComputed} from '@/state/helpers.js'

export default {
  computed: {
    ...authComputed
  },
}
</script>
