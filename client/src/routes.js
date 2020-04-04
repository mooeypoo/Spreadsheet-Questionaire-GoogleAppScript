import Vue from "vue";
import Router from "vue-router";
import MainPage from "./pages/MainPage.vue";
import About from "./pages/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { name: "home", path: "/", component: MainPage },
    { name: "about", path: "/about", component: About }
  ],
  linkExactActiveClass: "active"
});
