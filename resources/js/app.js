require('./bootstrap');

import { createApp } from 'vue';
import CategoryIndex from './components/category/CategoryIndex';

createApp({
	components: {
        CategoryIndex
	}
}).mount('#app');
