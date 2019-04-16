import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import VuexGetters from './views/VuexGetters.vue'
import TestVuex from '@/components/TestVuex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/vuex-getters',
      name: 'test-vuex-getters',
      component: VuexGetters
    },
    {
      path: '/vuex-mutations',
      name: 'test-vuex-mutations',
      component: TestVuex
    }
  ]
})
