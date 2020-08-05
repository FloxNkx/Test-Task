import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.css";
// import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        accent: '#29E7CD',
        info: '#FC642D',
        error: '#b71c1c',
      }
    }
  }
});
