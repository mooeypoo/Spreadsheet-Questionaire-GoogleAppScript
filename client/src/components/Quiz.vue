<template>
  <div class="quiz">
    <b-spinner v-if="!ready" variant="primary" type="grow" label="Spinning"></b-spinner>
    <Question v-if="ready && !isEnded" />
    <h1 v-if="isEnded">That's it!</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Question from "./Question";
export default {
  name: "Quiz",
  components: { Question },
  created() {
    this.$store.dispatch("quiz/getQuestions");
  },
  computed: {
    ...mapState({
      ready: state => state.quiz.ready,
      error: state => state.quiz.error
    }),
    ...mapGetters("quiz", {
      isEnded: "isEnded"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.quiz {
  h1 {
    color: $dark-box-font;
    text-align: center;
    padding: 1em 0;
  }
  @media only screen and (max-width: 710px) {
    padding: 0 2em;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 0.5em;
  }
}
</style>