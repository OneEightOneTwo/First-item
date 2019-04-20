import Vue from 'vue'
import App from './App.vue'

import router from './js/router.js'
import 'weui'
import $ from 'jquery'
import axios from 'axios'
import store from './js/vuex.js'  


import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

// //vue继承jquery的方法
// Vue.prototype.$ = $
// //vue继承axios的方法
// Vue.prototype.$axios = axios




Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,axios,
  render: h => h(App),
})