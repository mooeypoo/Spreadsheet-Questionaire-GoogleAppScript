<template>
  <div class="wrapper" id="req_app">
    <div class="topbar">
      <div class="topbar-wrapper">
        <div class="topbar-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Wikimedia-logo_black.svg"
          />
        </div>
        <div class="topbar-title">
          <h1>
            Wikimedia's
            <span class="topbar-title-emphasis">Distant Socializing</span>
            Experiment
          </h1>
          <h2>Connecting, remotely!</h2>
        </div>
      </div>
    </div>
    <nav class="topmenu">
      <ul>
        <li>
          <router-link to="/">Main page</router-link>
        </li>
        <li>
          <router-link to="/quiz">Quiz</router-link>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from './routes';
export default {
  name: 'AppMain',
  router,
};
</script>

<style lang="scss" scoped>
.topbar {
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0 1em;
  border-bottom: 5px solid lightpink;

  &-wrapper {
    display: flex;
    width: 100%;
    max-width: 800px;
    margin: 0.5em auto;
  }

  &-title {
    font-family: 'Comic Neue', cursive;
    &-emphasis {
      font-weight: bold;
    }

    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
      color: #e91e63;
    }
  }
  &-logo {
    margin-right: 2em;
    img {
      height: 90px;
    }
  }
}

.topmenu {
  width: 400px;
  margin: 0 auto;

  ul {
    display: flex;
    li {
      list-style-type: none;

      &:not(:last-child) {
        margin-right: 2em;
      }

      a {
        display: block;
        padding: 0.5em;

        &:hover {
          background-color: #e4f2ff;
          text-decoration: none;
        }
      }
    }
  }
}

.content {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
</style>
