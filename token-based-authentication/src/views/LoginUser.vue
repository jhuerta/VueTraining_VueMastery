
<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value>

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value>

      <button type="submit" name="button">
        Login
      </button>
    </form>

    <div v-if="!isLoggedIn">
      Don't have an account yet? <router-link to="/register">Register!</router-link>
    </div>

  </div>
</template>

<script>
import {authComputed} from '@/state/helpers.js'

/* eslint-disable */
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    }
  },
  computed: {
    ...authComputed
  },
}
</script>

    <style lang="scss" scoped>
</style>
