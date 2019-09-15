import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import fr from 'vuetify/src/locale/fr';
import '@mdi/font/css/materialdesignicons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fr },
    current: 'fr',
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
});
