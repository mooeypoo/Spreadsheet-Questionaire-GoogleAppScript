import 'bootstrap';
import './scss/app.scss';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AppMain from './AppMain.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  el: '#fun_app',
  components: { AppMain },
});
