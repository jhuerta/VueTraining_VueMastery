import EventService from '../../services/EventService'

export const namespaced = true

export const state = {
  events: [],
  totalEvents: 0,
  event: {}
}
/*,
  count: 1,
    todos: [
      { id: 1, text: 'abc', done: true },
      { id: 2, text: 'def', done: true },
      { id: 3, text: 'ghi', done: true },
      { id: 4, text: 'jkl', done: false }
    ],
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
        events: [],
          events2: [
            {
              id: 1,
              title: 'Beach Cleanup',
              date: 'Aug 28 2018',
              time: '10:00',
              location: 'Daytona Beach',
              description: "Let's clean up this beach.",
              organizer: 'Adam Jahr',
              category: 'sustainability',
              attendees: [
                {
                  id: 'abc123',
                  name: 'Adam Jahr'
                },
                {
                  id: 'def456',
                  name: 'Gregg Pollack'
                },
                {
                  id: 'ghi789',
                  name: 'Beth Swanson'
                },
                {
                  id: 'jkl101',
                  name: 'Mary Gordon'
                }
              ]
            },
            {
              id: 2,
              title: 'Park Cleanup',
              date: 'Nov 12 2018',
              time: '12:00',
              location: '132 N Magnolia Street, Orlando, Florida',
              description: "We're going to clean up this park.",
              organizer: 'Adam Jahr',
              category: 'nature',
              attendees: [
                {
                  id: 'ghi789',
                  name: 'Beth Swanson'
                },
                {
                  id: 'jkl101',
                  name: 'Mary Gordon'
                }
              ]
            },
            {
              id: 3,
              title: 'Pet Adoption Day',
              date: 'Dec 2 2018',
              time: '12:00',
              location: '132 N Magnolia Street, Orlando, Florida',
              description: 'Help animals find new homes.',
              organizer: 'Gregg Pollack',
              category: 'animal welfare',
              attendees: [
                {
                  id: 'abc123',
                  name: 'Adam Jahr'
                },
                {
                  id: 'ghi789',
                  name: 'Beth Swanson'
                },
                {
                  id: 'jkl101',
                  name: 'Mary Gordon'
                }
              ]
            },
            {
              id: 4
            }
          ]}*/

export const mutations = {
  INCREMENT_COUNT(state, byHowMuch) {
    state.count += byHowMuch
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  INITIALIZE_EVENTS(state, events) {
    // Vue.set(state, 'events', [...events])
    state.events = events.reverse()
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_TOTAL_EVENTS(state, totalEvents) {
    state.totalEvents = totalEvents
  }
}

export const actions = {
  eventJustForTest() {
    return 'Event Action: Just for test'
  },
  fetchEvent({ commit, rootState, getters, dispatch }, id) {
    dispatch(
      'notificationStore/addSuccess',
      'Successfully called event id: ' + id,
      { root: true }
    )

    // Accessing state from other modules: USE rootState
    var globalStoreMessage = `Getting event for user: ${
      rootState.userStore.user.name
    }`
    console.log('Calling a user getter: ' + getters.userGetter)
    console.log('Calling an event getter: ' + getters.eventGetter)
    console.log('Calling an common name getter: ' + getters.commonNameGetter)

    // Modules and namespaces:https://vuex.vuejs.org/guide/modules.html

    // If using namespaces, you need to use this (for those not namespaced)
    dispatch('userJustForTest', null, { root: true }).then(m =>
      console.log('userJustForTest: ' + m)
    )
    // If there are no namespaces, then this notation:
    // dispatch('userJustForTest').then(m => console.log('userJustForTest: ' + m))

    // This is when dispatching an action within the same component
    dispatch('eventJustForTest').then(m =>
      console.log('eventJustForTest: ' + m)
    )

    // The above is equivalent to
    // dispatch('eventStore/eventJustForTest').then(m =>
    //   console.log('eventJustForTest: ' + m)
    // )

    console.log(globalStoreMessage)

    var event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        dispatch(
          'notificationStore/addSuccess',
          'Successfully Called Fetch Events',
          { root: true }
        )

        var xTotalCount = response.headers['x-total-count']
        commit('SET_TOTAL_EVENTS', xTotalCount)
        commit('INITIALIZE_EVENTS', response.data)
      })
      .catch(error => {
        dispatch(
          'notificationStore/addError',
          'Problem fetching events: ' + error.message,
          { root: true }
        )
      })
  },
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  incrementCount({ state, commit }, value) {
    if (state.count >= 0) {
      commit('INCREMENT_COUNT', value)
    } else {
      commit('INCREMENT_COUNT', state.count * -1)
    }
  }
}

export const getters = {
  // Different ways to define the function:

  /*categoryLength(state) {
    return state.categories.length
  }*/

  // categoryLength: function(state){
  //   return state.categories.length
  // }
  commonNameGetter() {
    return 'This is a getter in the --> event <--'
  },
  eventGetter() {
    return 'This is a getter in the event'
  },
  events: state => {
    return state.events.reverse()
  },

  doneTodos: (state, getter, rootState) =>
    rootState.todos.filter(todo => todo.done),
  // PASSING GETTERS INTO GETTERS!!!
  numberOfDoneTodos: (state, getters) => {
    return getters.doneTodos.length
  },
  categoryLength: state => {
    return state.categories.length
  },
  getEventById: state => firstArgument => {
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
}
