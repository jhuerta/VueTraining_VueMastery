<template>
  <div>
    <h1>Events Listing</h1>
    <!-- <a href="#" @click="page--"><< Previous</a> |
    <a href="#" @click="page++">Next >></a>-->

    <router-link :to="{name: 'event-list', query: {page: page-1} }">*Previous*</router-link>|
    <router-link :to="{name: 'event-list', query: {page: page+1} }">*Next*</router-link>|
    <div class="text">
      <label for="perpage">Per Page</label>
      <input id="perpage" @change="onChange()" v-model="perPage" type="number">
    </div>
    <div class="text">
      <label for="page">Page</label>
      <input id="page" @change="onChange()" v-model="page" type="number">
    </div>

    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      perPage: 2,
      page: 10
    }
  },
  methods: {
    onChange() {
      this.$store.dispatch('fetchEvents', {
        perPage: this.perPage,
        page: this.cpage
      })
    }
  },
  computed: {
    ...mapState(['events']),
    cpage: {
      get() {
        console.log('changed')
        return this.page
      },
      // setter
      set(value) {
        console.log('set')
      }
    }
  },
  // computed: {
  //   events() {
  //     // return this.$store.state.events
  //     return this.$store.getters.events
  //   }
  // },
  created() {
    this.cpage = this.$route.query.page || this.cpage
    this.onChange()
  }
}
</script>


<style scoped>
div.text {
  margin: 0;
  padding: 0;
  padding-bottom: 1.25em;
}

div.text label {
  margin: 0;
  padding: 0;
  display: block!;
  font-size: 100%;
  padding-top: 0.1em;
  padding-right: 0.25em;
  width: 6em;
  text-align: right;
  float: left;
}

div.text input,
div.text textarea {
  margin: 0;
  padding: 0;
  display: block!;
  font-size: 100%;
}

input:active,
input:focus,
input:hover,
textarea:active,
textarea:focus,
textarea:hover {
  background-color: lightyellow;
  border-color: yellow;
}
</style>
