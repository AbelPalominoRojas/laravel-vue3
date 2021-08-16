require('./bootstrap');

import 'bootstrap';

import { createApp } from 'vue';
import router from './routes';

window.appApiBaseUrl = `${window.location.origin}/api`;

createApp({})
.use(router)
.mount('#app');
