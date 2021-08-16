import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component:  () => import('./components/home/HomeIndex')
    },
    {
        path: '/category',
        name: 'category',
        // component: require('./components/category/CategoryIndex').default
        component: () => import('./components/category/CategoryIndex')
    },
    // { path: '*', redirect: '/' },
    // { path: '/', redirect: '/' },
  ];

export default createRouter({
    history: createWebHistory(),
    routes,
});
