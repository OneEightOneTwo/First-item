import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
import home from '../page/home.vue'
import chat from '../page/chat.vue'
import my from '../page/fcous.vue'
import redact from '../page/redact.vue'



const routes = [ {
    path: '/',
    component: home,
    name: 'home'
}, {
    path: '/chat',
    component: chat,
    name: 'chat'
}, {
    path: '/my',
    component: my,
    name: 'my'
}, {
    path: '/redact',
    component: redact,
    name: 'redact'
}]

const router = new Vuerouter({
    routes:routes
})

export default router