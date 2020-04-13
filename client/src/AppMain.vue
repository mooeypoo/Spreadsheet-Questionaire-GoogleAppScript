<template>
  <div class="wrapper full-height" id="req_app">
    <header>
      <div class="logo">
        <span class="logo-emphasized">Wiki</span>quaranteam
      </div>
      <div class="topbar"></div>
    </header>
    <div id="content" class="content">
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

<style lang="scss" scoped>
@import "./scss/variables";
header {
  width: 100%;
  background-color: $dark-box-bg;
  color: $dark-box-font;
  padding: $page-padding;
  padding-bottom: 2em;
  @media only screen and (max-width: 500px) {
    padding: 1em;
  }

  .logo {
    font-size: 1.5em;
    @media only screen and (max-width: 500px) {
      font-size: 1.2em;
    }
    &-emphasized {
      font-weight: bold;
    }
  }
}
</style>
