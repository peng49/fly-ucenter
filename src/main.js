import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App'

import Layout from './components/Layout'
import PostEdit from './view/post/edit'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Layout },
    {
        path: '/user',
        component: Layout,
        children:[
            {
                path:'posts',
                component: import('./components/user/Posts')
            }
        ]
    },
    {
        path: '/post/edit',
        component: PostEdit
    },

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
