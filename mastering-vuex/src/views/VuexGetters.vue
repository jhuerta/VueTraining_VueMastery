<template>
  <span>
    <h1>Create Event ({{today}})</h1>
    <div>
      <u>Using mapstate and properties:</u>
      <b>{{userName}} ({{userId}})</b>
    </div>
    <div>
      <u>Using mapstate passing the object:</u>
      <b>{{userStore.user.name}} ({{userStore.user.id}})</b>
    </div>
    <div>
      <u>Using literal strings to compose the name + id:</u>
      <b>{{fullUserName}}</b>
    </div>
    <b>Choose a category ({{numberOfCategories}} available)</b>
    <select>
      <option v-for="category in categories" :key="category.id">{{ category }}</option>
    </select>
    <h3>Done ToDos ({{numberOfDoneTodos}})</h3>
    <div v-for="doneTodo in doneTodos" :key="doneTodo.id">{{ doneTodo.id }}. {{ doneTodo.text }}</div>
    <div>
      <b>Some event by id</b>
      {{getEventById(1,'other argument')}}
    </div>
  </span>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  // 1) Mapping Vuex store to computed properties using mapste:
  data() {
    return {
      todayDay: 'Monday'
    }
  },
  computed: {
    // We can use mapGetters in a similar way as mapState
    ...mapGetters('eventStore', ['getEventById', 'numberOfDoneTodos']),
    numberOfCategories() {
      return this.$store.getters.categoryLength
    },
    doneTodos() {
      return this.$store.getters.doneTodos
    },
    // doneTodosCount() {
    //   return this.$store.getters.numberOfDoneTodos
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    today() {
      return Date.now()
    },
    userName() {
      return this.userStore.user.name
    },
    userId() {
      return this.userStore.user.id
    },
    // We can access the store from this.$store or with mapstate
    fullUserName() {
      return `${this.userStore.user.name} (${this.userStore.user.id})`
    },
    ...mapState(['categories', 'userStore'])
    // using this notation of array is the same as
    /*...mapState({
      user: 'user',
      categories: 'categories',
      fullUserName: state => `${state.user.name} +(${state.user.id})+`,
      userName: state => state.user.name,
      userId: state => state.user.id
    })*/
  }
}
</script>

<style scoped>
</style>
