import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './pages/MainPage.vue';
import QuizPage from './pages/QuizPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { name: 'home', path: '/', component: MainPage },
    { name: 'quiz', path: '/quiz', component: QuizPage },
  ],
  linkExactActiveClass: 'active',
});