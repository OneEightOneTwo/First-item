import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
import home from '../page/home.vue'

import redact from '../page/redact.vue'
//底部导航
import fcous from '../page/pages/fcous.vue'
import chat from '../page/pages/chat.vue'
import hot from '../page/pages/hot.vue'


const routes = [{
        path: '/',
        component: home,
        name: 'home',
        children: [
            {
                path: '/',
                component: hot,
                name: 'hot',
            },
            {
                path: 'fcous',
                component: fcous,
                name: 'fcous',
            },{
                path: 'chat',
                component: chat,
                name: 'chat'
            }
        ]
    },
    {
        path: '/redact',
        component: redact,
        name: 'redact'
    }
]

const router = new Vuerouter({
    routes: routes
})

export default router