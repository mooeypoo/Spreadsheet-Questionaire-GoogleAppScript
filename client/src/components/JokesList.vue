<template>
  <div class="jokes-list">
    <h1>Jokes list</h1>
    <div class="jokes-list-wrapper">
      <Slide v-for="(data, index) in seenJokes" :key="index" :data="data" small />
    </div>
  </div>
</template>

<script>
import Slide from "./Slide";
export default {
  name: "JokesList",
  components: { Slide },
  computed: {
    seenJokes: function() {
      return this.$store.getters["slideshow/getSeenSlides"]("jokes");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.jokes-list {
  margin-top: 1em;
  h1 {
    color: $dark-box-font;
    font-size: 1.5em;
  }
  &-wrapper {
    padding: 2em 0;
    @media only screen and (max-width: 500px) {
      padding: 1em 0;
    }
  }
}
</style>