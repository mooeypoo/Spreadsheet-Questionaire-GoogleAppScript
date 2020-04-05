import 'bootstrap';
import './scss/app.scss';
import Vue from 'vue';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AppMain from './AppMain.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: '#fun_app',
  store,
  components: { AppMain },
});
