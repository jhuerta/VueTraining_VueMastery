<template>
  <div id="nav">
    <div>
      <bIcon name="video-off" width="40" height="40">
        <b slot="name_text" class="icon-name">[Slot 1] - My name {{showid}}</b>
        <template slot="lastname_text">
          <b class="icon-lastname">[Slot 2] - With lastname {{showid}}</b>
        </template>
        <!-- <b slot="age_text">4</b> -->
      </bIcon>
    </div>
    <router-link to="/" class="brand">Real World Events</router-link>|
    <nav>
      <router-link to="/">Homegit a</router-link>|
      <router-link :to="{name:'eventshow', params: {showid: showid}}">Event Show:</router-link>
      <input style="width:15%" type="number" v-model="showid">
      ({{showid}})
      <router-link :to="{name:'eventcreate'}">Event Create</router-link>|
      <router-link :to="{name:'eventlist'}">Event List</router-link>|
      <router-link :to="{name:'card'}">Card</router-link>|
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showid: 0
    }
  }
})
</script>

<style scoped>
.icon-name {
  color: fuchsia;
}

.icon-lastname {
  color: greenyellow;
}
</style>
