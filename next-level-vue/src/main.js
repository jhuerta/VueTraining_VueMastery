import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BaseIcon from '@/components/BaseIcon'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/formatDate'

Vue.filter('formatDate', DateFilter)

Vue.use(Vuelidate)

Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// DECLARING A GLOBAL MIXIN
Vue.mixin({
  mounted() {
    // QUITE DANGEROUS: THIS CODE WILL BE EXECUTED EVERYWHERE
    // console.log('I will be in every component')
  },
  data() {
    return {
      dataFromMixin: "I'm definied as a global mixin data"
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
