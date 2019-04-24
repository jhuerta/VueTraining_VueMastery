/*

------------------------------------------------------------
        TWO WAYS TO DECLARE MODULES IN THE STORE
------------------------------------------------------------

// TO BE USED IN THE STORE
import * as moduleName from 'location/moduleName'
export const state = {...}
export const mutations = {...}
export const actions = {...}
export const getters = {...}

// TO BE USED IN THE STORE
import moduleName from 'location/moduleName'
export default{
  state {...},
  mutations {...},
  actions {...},
  getters {...},
}

*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as userStore from '@/store/modules/user.js'
import * as eventStore from '@/store/modules/event.js'
import * as notificationStore from '@/store/modules/notification.js'

export default new Vuex.Store({
  state: {
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
    ]
  },
  modules: { userStore, eventStore, notificationStore }
})
