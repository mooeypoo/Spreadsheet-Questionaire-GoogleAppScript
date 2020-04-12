import Vue from 'vue';
import Vuex from 'vuex';
import quiz from './modules/quiz';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    quiz
  },
  strict: debug
});
