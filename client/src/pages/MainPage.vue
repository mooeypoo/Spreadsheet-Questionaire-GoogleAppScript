<template>
  <div class="wrapper">
    <div class="image">&nbsp;</div>
    <div class="content">
      <h1>Connecting, remotely</h1>
      <p>A socializing experiment for WMF'ers. Join in on the fun, don't touch your face.</p>
      <b-button to="/quiz" variant="warning">Quiz yourself</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  background-color: $dark-box-bg;
  color: $dark-box-font;
  padding: 3em $page-padding;

  .content {
    padding-bottom: 2em;
    h1 {
      margin-bottom: 1em;
    }

    p {
      font-size: 1.5em;
    }
  }
  @media only screen and (max-width: 710px) {
    padding-top: 0;
  }

  .image {
    float: right;
    background: url(https://upload.wikimedia.org/wikipedia/commons/8/86/Laptop_with_stickers.jpg);
    background-repeat: no-repeat;
    width: 600px;
    height: 450px;
    background-size: 600px 450px;

    @media only screen and (max-width: 710px) {
      float: none;
      width: 400px;
      height: 300px;
      background-size: 400px 300px;
    }

    @media only screen and (max-width: 500px) {
      width: 300px;
      height: 225px;
      background-size: 300px 225px;
    }
  }
}
</style>
