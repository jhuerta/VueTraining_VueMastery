import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate'
import EventShow from './views/EventShow'
import EventList from './views/EventList'
import NotFoundPage from './views/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Show/:id',
      name: 'eventshow',
      component: EventShow,
      alias: '/',
      props: true
    },
    {
      path: '/Create',
      name: 'eventcreate',
      component: EventCreate
    },
    {
      path: '/List',
      name: 'eventlist',
      component: EventList
    },
    {
      path: '*',
      name: 'notfounderror',
      component: NotFoundPage
    }
  ]
})
