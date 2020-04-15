<template>
  <div class="page-wrapper">
    <div class="page-image">&nbsp;</div>
    <div class="page-content">
      <h1>Connecting, remotely</h1>
      <p>
        A socializing experiment for the Wikimedia Foundation family. Join in on
        the fun, avoid touching your face.
      </p>
      <b-button to="/quiz" variant="warning">Quiz yourself</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.page-wrapper {
  p {
    font-size: 1.5em;
  }
  .page-image {
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
