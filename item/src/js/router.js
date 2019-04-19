import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
//主页
import home from '../page/home.vue'
//头部编辑
import redact from '../page/redact.vue'
//底部导航
import fcous from '../page/pages/fcous.vue'
// import xlist from '../page/xlist'
import hot from '../page/pages/hot.vue'
//登陆页
import xlog from '../page/xlog.vue'
//注册页
import xreg from '../page/xreg.vue'
//聊天列表
import xlist from '../page/xlist.vue'
//头部组件
import newHeader from '../components/newHeader.vue'
//聊天界面
import chat from "../page/chat.vue"
const routes = [{
        path: '/',
        component: home,
        name: 'home',
        children: [{
            path: '/',
            component: hot,
            name: 'hot',
        }, {
            path: 'fcous',
            component: fcous,
            name: 'fcous',
        }, {
            path: 'xlist',
            component: xlist,
            name: 'xlist'
        }]
    },
    {
        path: '/redact',
        component: redact,
        name: 'redact'
    }, {
        path: '/xlog',
        component: xlog,
        name: 'xlog'
    }, {
        path: '/xreg',
        component: xreg,
        name: 'xreg'
    }, {
        path: '/xlist',
        component: xlist,
        name: 'xlist'
    }, {
        path: '/newHeader',
        component: newHeader,
        name: 'newHeader'
    },{
        path:'/chat',
        component:chat,
        name:'chat'
    }
]

const router = new Vuerouter({
    routes: routes
})

export default router