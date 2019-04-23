<template>
  <div>
    <h1>Events Listing for {{userStore.user.name}}</h1>
    <!-- <a href="#" @click="page--"><< Previous</a> |
    <a href="#" @click="page++">Next >></a>-->

    <router-link
      v-show="page>1"
      :to="{name: 'event-list', query: {page: parseInt(page)-1} }"
    >*Previous*</router-link>|
    <router-link
      v-show="shouldDisplayNext"
      :to="{name: 'event-list', query: {page: parseInt(page)+1} }"
    >*Next*</router-link>|
    <div class="text">
      <label for="perpage">Per Page</label>
      <input id="perpage" @change="onChange()" v-model="perPage" type="number">
    </div>
    <div class="text">
      <label for="page">Page</label>
      <input id="page" @change="onChange()" v-model="page" type="number">
    </div>

    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event"/>
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
      page: this.$route.query.page || 10
    }
  },
  methods: {
    onChange() {
      this.$store.dispatch('eventStore/fetchEvents', {
        perPage: this.perPage,
        page: this.cpage
      })
    }
  },
  computed: {
    ...mapState(['eventStore', 'userStore']),
    cpage: {
      get() {
        return this.page
      },
      // setter
      set() {}
    },
    shouldDisplayNext: {
      get() {
        var currentDisplayed = this.page * this.perPage
        var shouldDisplayNext = this.eventStore.totalEvents > currentDisplayed
        return shouldDisplayNext
      },
      set() {}
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
