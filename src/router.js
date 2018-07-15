import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home'
import LearnMore from '@/components/LearnMore'
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
            path: '/learn-more',
            component: LearnMore
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
            path: '*', component: Home
        }
    ]
})
