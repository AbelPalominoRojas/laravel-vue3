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
    {
        path: '/category/create',
        name: 'category.create',
        component: () => import('./components/category/CategoryCreate')
    },
    {
        path: '/category/edit/:id',
        name: 'category.edit',
        component: () => import('./components/category/CategoryEdit')
    },
    // { path: '*', redirect: '/' },
    // { path: '/', redirect: '/' },
  ];

export default createRouter({
    history: createWebHistory(),
    routes,
});
