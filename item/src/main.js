import Vue from 'vue'
import App from './App.vue'

import router from './js/router.js'
import 'weui'
import $ from 'jquery'
import axios from 'axios'
//vue继承jquery的方法
Vue.prototype.$ = $
//vue继承axios的方法
Vue.prototype.$axios = axios




Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
})