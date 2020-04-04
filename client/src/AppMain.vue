<template>
  <div class="wrapper" id="req_app">
    <!-- Sidebar  -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Wikimedia Distant Socializing Quiz!</h3>
      </div>
      <ul class="list-unstyled components">
        <li>
          <router-link to="/">Quiz</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <!-- Page Content  -->
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from "./routes";
export default {
  name: "AppMain",
  router
};
</script>