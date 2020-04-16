import Vue from 'vue';
import Vuex from 'vuex';
import quiz from './modules/quiz';
import slideshow from './modules/slideshow';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    quiz,
    slideshow,
  },
  strict: debug,
});
