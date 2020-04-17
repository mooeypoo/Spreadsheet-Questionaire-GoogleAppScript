<template>
  <div class="page-wrapper">
    <div class="page-image">&nbsp;</div>
    <div class="page-content">
      <h1>Connecting, remotely</h1>
      <p>
        A socializing experiment for the Wikimedia Foundation family. Join in on
        the fun, avoid touching your face.
      </p>

      <div class="page-buttons">
        <div class="page-buttons-button">
          <b-button class="button-link p-3" to="/quiz" variant="warning">
            <b-icon icon="exclamation-diamond-fill"></b-icon>&nbsp;Quiz yourself!
          </b-button>
          <div class="page-buttons-text">See how well you know your colleagues at the Foundation!</div>
        </div>
        <div class="page-buttons-button">
          <b-button class="button-link p-3" to="/jokes" variant="dark">
            <b-icon icon="chat-dots"></b-icon>&nbsp;Read some jokes
          </b-button>
          <div class="page-buttons-text">Laughter is good for the distant socializing soul!</div>
        </div>
      </div>
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
.page {
  &-content {
    padding-bottom: 0;
  }
  &-buttons {
    width: 400px;
    text-align: center;

    @media only screen and (max-width: 1110px) {
      width: 350px;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }

    &-text {
      width: 70%;
      margin: 0 auto;
      font-weight: bold;
    }

    &-button {
      display: block;
      margin-top: 2em;
      .btn.button-link {
        font-size: 1.5em;
      }
      &:not(:last-child) {
        margin-bottom: 0.5em;
      }
    }
  }
  &-wrapper {
    p {
      font-size: 1.5em;
    }

    .page-image {
      float: right;
      background: url(https://upload.wikimedia.org/wikipedia/commons/8/86/Laptop_with_stickers.jpg);
      background-repeat: no-repeat;
      margin-left: 1em;
      width: 600px;
      height: 450px;
      background-size: 600px 450px;

      @media only screen and (max-width: 1000px) {
        width: 400px;
        height: 300px;
        background-size: 400px 300px;
      }

      @media only screen and (max-width: 800px) {
        float: none;
        margin-bottom: 1em;
        margin-left: 0;
        width: 500px;
        height: 375px;
        background-size: 500px 375px;
      }

      @media only screen and (max-width: 500px) {
        width: 300px;
        height: 225px;
        background-size: 300px 225px;
      }
    }
  }
}
</style>
