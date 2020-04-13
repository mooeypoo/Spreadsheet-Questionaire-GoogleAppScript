<template>
  <div>
    <div class="header">
      <h1>Pop Quiz</h1>
    </div>
    <div class="page-quiz-wrapper">
      <div class="page-quiz-content">
        <b-spinner v-if="!ready" variant="primary" type="grow" label="Spinning"></b-spinner>
        <Quiz v-if="ready" />
      </div>
    </div>
  </div>
</template>

<script>
import Quiz from "../components/Quiz";
import { mapState } from "vuex";
export default {
  name: "QuizPage",
  components: { Quiz },
  created() {
    this.$store.dispatch("quiz/getQuestions");
  },
  computed: {
    ...mapState({
      ready: state => state.quiz.ready,
      error: state => state.quiz.error
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.header {
  width: 100%;
  background-color: $dark-box-bg;
  color: $dark-box-font;
  padding: 0 $page-padding 2em 0;
  @media only screen and (max-width: 500px) {
    font-size: 1.7em;
    padding: 0 0 0.5em 0;
  }

  h1 {
    font-weight: bold;
    text-align: center;
    @media only screen and (max-width: 500px) {
      padding: 0;
    }
  }
}
.page-quiz {
  &-wrapper {
    width: 100%;
    height: 100%;
    background: $dark-box-bg;
    border-bottom: 5em solid $dark-box-bg;
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
}
</style>
