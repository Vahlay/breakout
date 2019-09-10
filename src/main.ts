import Vue, {CreateElement, VNode} from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import './assets/fonts/Roboto/Roboto.css';

Vue.config.productionTip = false;


new Vue({
  store,
  vuetify,
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app');
