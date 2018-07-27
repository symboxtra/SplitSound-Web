import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home'
import Features from '@/components/Features'
import Download from '@/components/Download'
import AboutUs from '@/components/AboutUs'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/features',
            component: Features
        },
        {
            path: '/download',
            component: Download
        },
        {
            path: '/about-us',
            component: AboutUs
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
