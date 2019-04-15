<template>
  <div id="nav">
    <div>
      My Base Icon:
      <bIcon name="video-off" width="40" height="40"/>
    </div>
    <router-link to="/" class="brand">Real World Events</router-link>|
    <nav>
      <router-link to="/">Homegit a</router-link>|
      <router-link :to="{name:'eventshow', params: {showid: showid}}">Event Show:</router-link>
      <input style="width:5%" type="number" v-model="showid">
      ({{showid}})
      <router-link :to="{name:'eventcreate'}">Event Create</router-link>|
      <router-link :to="{name:'eventlist'}">Event List</router-link>|
      <router-link :to="{name:'card'}">Card</router-link>|
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
</style>
