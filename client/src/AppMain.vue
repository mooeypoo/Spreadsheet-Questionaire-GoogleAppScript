<template>
  <div class="wrapper full-height" id="req_app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <span class="logo-emphasized">Wiki</span>quaranteam
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <b-nav-item right href="https://forms.gle/aHtXuw2ToNR4287u9" target="_blank">
              <b-icon icon="pencil"></b-icon>&nbsp;Fill in the form!
            </b-nav-item>
            <b-nav-item
              right
              href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript"
              target="_blank"
            >
              <b-icon icon="braces"></b-icon>&nbsp;Contribute (GitHub)
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
.logo {
  font-size: 1.5em;
  @media only screen and (max-width: 500px) {
    font-size: 1.2em;
  }
  &-emphasized {
    font-weight: bold;
  }
}

.navbar {
  &-nav {
    text-align: center;
  }
  &.bg-dark {
    background-color: $dark-box-bg !important;
  }
}
</style>
