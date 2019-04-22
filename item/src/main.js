import Vue from 'vue'
import App from './App.vue'

import router from './js/router.js'
import 'weui'
import $ from 'jquery'
import store from './js/vuex.js' 
//vue继承axios的方法
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

//vue继承jquery的方法
Vue.prototype.$ = $
//vue继承axios的方法
Vue.prototype.$axios = axios




Vue.config.productionTip = false


new Vue({
  el: "#app",
  router,
  store,axios,
  render: h => h(App),
})