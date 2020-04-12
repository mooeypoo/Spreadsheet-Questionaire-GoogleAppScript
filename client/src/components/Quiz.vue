<template>
  <div class="quiz">
    <Question v-if="!isEnded" />
    <h1 v-if="isEnded">That's it!</h1>
    <AnswerList v-if="showAnswers" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Question from "./Question";
import AnswerList from "./AnswerList";
export default {
  name: "Quiz",
  components: { Question, AnswerList },
  computed: {
    showAnswers: function() {
      return this.completed.length;
    },
    ...mapGetters("quiz", {
      isEnded: "isEnded",
      completed: "allCompleted"
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