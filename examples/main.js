import Vue from 'vue'
import App from './App.vue'
import startline from '../packages'

Vue.config.productionTip = false
Vue.use(startline)

new Vue({
  render: h => h(App)
}).$mount('#app')
