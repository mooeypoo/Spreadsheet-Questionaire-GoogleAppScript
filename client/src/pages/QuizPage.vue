<template>
  <div>
    <div class="page-wrapper">
      <div class="page-header">
        <h1>Pop Quiz</h1>
      </div>
      <div class="page-quiz-wrapper">
        <div class="page-quiz-content">
          <Quiz />
          <AnswerList v-if="ready && showAnswers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Quiz from "../components/Quiz";
import AnswerList from "../components/AnswerList";
export default {
  name: "QuizPage",
  components: { Quiz, AnswerList },
  computed: {
    showAnswers: function() {
      return this.completed.length;
    },
    ...mapState({
      ready: state => state.quiz.ready,
      error: state => state.quiz.error
    }),
    ...mapGetters("quiz", {
      isEnded: "isEnded",
      completed: "allCompleted"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
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
.quiz {
  margin-bottom: 0.5em;
}
</style>
