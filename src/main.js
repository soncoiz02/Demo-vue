import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './pages/blog/index.vue'
import Home from './pages/home/index.vue'
import Post from './pages/post/index.vue'
import About from './pages/about/index.vue'
import Category from './pages/category/index.vue'
import Author from './pages/author/index.vue'
import Contact from './pages/contact/index.vue'
import PrivacyPolicy from './pages/privacy-policy/index.vue'

import './style.css'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/blog',
        component: Blog,
        name: 'Blog',
    },
    {
        path: '/post/:id',
        component: Post,
        name: 'Post',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/category/:id',
        component: Category,
        name: 'Category',
    },
    {
        path: '/author/:id',
        component: Author,
        name: 'Author',
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact',
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy,
        name: 'Privacy and Policy',
    },
]

const router = new VueRouter({
    routes
})

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faRightLong, faLeftLong, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

