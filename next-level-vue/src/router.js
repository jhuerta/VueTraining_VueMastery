import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import NotFoundPage from './components/NotFound'
import NetworkIssue from './components/NetworkIssue'

import NProgress from 'nprogress'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: routeTo.fullPath } })
            } else {
              next({ name: 'network-issue', params: { info: error } })
            }
          })
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue,
      props: true
    },
    {
      path: '*',
      beforeEnter(routeTo, routeFrom, next) {
        next({ name: '404', params: { resource: routeTo.fullPath } })
      }
      // redirect: { name: '404', params: { resource: 'page_name' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  console.log('Global Router: beforeEach')
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
  console.log('Global Router: afterEach')
})

export default router
