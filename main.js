import App from './App';
import Vue from 'vue';
import './uni.promisify.adaptor';
import MyUI from '@/components/MyUI/index.js';

Vue.config.productionTip = false;
Vue.use(MyUI);

App.mpType = 'app';
const app = new Vue({
    ...App
});
app.$mount();
