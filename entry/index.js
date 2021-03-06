import Vue from 'vue';
import 'common.scss';
import 'flex.scss';
import App from '../src/pages/demos/app';
import router from '../src/routers/indexRouter';
import store from '../src/vuex';

const app = new Vue({
	render: h => h(App),
    store,
	router
}).$mount('#app')
