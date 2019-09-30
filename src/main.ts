import Vue, {CreateElement, VNode} from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import {KeyboardEventBus} from './KeyboardEventBus';

Vue.config.productionTip = false;

document.addEventListener('keyup', (event) => {
  KeyboardEventBus.$emit('keyup', event);
});

document.addEventListener('keydown', (event) => {
  KeyboardEventBus.$emit('keydown', event);
});

new Vue({
  store,
  vuetify,
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app');
