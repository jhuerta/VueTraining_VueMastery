import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    INCREMENT_COUNT(state, byHowMuch) {
      state.count += byHowMuch
    }
  },
  actions: {
    incrementCount({ state, commit }, value) {
      if (state.count >= 0) {
        commit('INCREMENT_COUNT', value)
      } else {
        commit('INCREMENT_COUNT', state.count * -1)
      }
    }
  },
  getters: {
    // Different ways to define the function:

    /*categoryLength(state) {
      return state.categories.length
    }*/

    // categoryLength: function(state){
    //   return state.categories.length
    // }

    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // PASSING GETTERS INTO GETTERS!!!
    numberOfDoneTodos: (state, getters) => {
      return getters.doneTodos.length
    },
    categoryLength: state => {
      return state.categories.length
    },
    getEventById: state => (firstArgument, secondArgument) => {
      console.log(firstArgument)
      console.log(secondArgument)
      return state.events.find(event => event.id == firstArgument)
    }

    // Other way of defining the function above. Notice how is not obvious how to pass arguments
    // getEventById: function(state) {
    //   return function(firstArgument, secondArgument) {
    //     console.log(firstArgument)
    //     console.log(secondArgument)
    //     return state.events.find(event => event.id == firstArgument)
    //   }
    // }
  },
  state: {
    count: 1,
    events: [
      { id: 1, title: 'Rojo', organizer: 'Rambo' },
      { id: 2, title: 'Verde', organizer: 'Stallone' },
      { id: 3, title: 'Azul', organizer: 'Rocky' },
      { id: 4, title: 'Amarillo', organizer: 'Balboa' }
    ],
    todos: [
      { id: 1, text: 'abc', done: true },
      { id: 2, text: 'def', done: true },
      { id: 3, text: 'ghi', done: true },
      { id: 4, text: 'jkl', done: false }
    ],
    user: {
      id: '123456',
      name: 'Juan Huerta'
    },

    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
