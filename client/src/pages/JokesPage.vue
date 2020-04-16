<template>
  <div>
    <div class="page-wrapper">
      <div class="page-header">
        <h1>Jokes</h1>
      </div>
      <div class="page-jokes-wrapper">
        <h2>Laughter is good for the social distancing soul...</h2>
        <div class="page-jokes-content">
          <h1 v-if="isEnded" class="page-jokes-done">You've read them all. Wasn't that hilarious!?</h1>
          <Slide v-if="isReady && !isEnded" :data="current" />
          <div class="page-jokes-nextbutton">
            <b-button
              v-if="isReady && !isEnded"
              variant="warning"
              v-on:click="getNextJoke"
            >Give me another!</b-button>
          </div>
          <JokesList v-if="shouldShowSeenJokes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "../components/Slide";
import JokesList from "../components/JokesList";
export default {
  name: "JokesPage",
  components: { Slide, JokesList },
  created() {
    this.$store.dispatch("slideshow/fetchSlides", "jokes");
  },
  computed: {
    current: function() {
      return this.$store.getters["slideshow/getCurrentSlide"]("jokes");
    },
    shouldShowSeenJokes: function() {
      return this.$store.getters["slideshow/hasSeenSlides"]("jokes");
    },
    isEnded: function() {
      return this.$store.getters["slideshow/isEnded"]("jokes");
    },
    isReady: function() {
      return this.$store.getters["slideshow/isReady"]("jokes");
    }
  },
  methods: {
    getNextJoke: function() {
      this.$store.dispatch("slideshow/goToNextSlide", "jokes");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.page-jokes {
  &-wrapper {
    width: 100%;
    height: 100%;
    background: $dark-box-bg;
    border-bottom: 5em solid $dark-box-bg;

    h2 {
      font-size: 1.2em;
      text-align: center;
    }
  }
  &-content {
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 710px) {
      width: 90%;
    }
    @media only screen and (max-width: 500px) {
      width: 100%;
      border: 5px solid $dark-box-bg;
      border-top: 0;
      border-bottom: 0;
    }
  }
  &-done {
    margin: 2em 0;
    text-align: center;
  }
  &-nextbutton {
    text-align: center;
  }
}
</style>
