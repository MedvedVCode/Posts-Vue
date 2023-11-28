import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store';
import components from '@/components/UI';
import router from './router/router';

const app = createApp(App);

components.forEach((item) => app.component(item.name, item));

app.use(router).use(store).mount('#app');
