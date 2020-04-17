<template>
  <div class="quiz">
    <div class="spinner-container" v-if="!ready">
      <b-spinner class="spinner" variant="light" label="Loading..."></b-spinner>
    </div>
    <Question v-if="ready && !isEnded" />
    <h1 v-if="isEnded">That's it!</h1>
    <b-card v-if="ready" class="text-center quiz-chat text-dark">
      <div class="quiz-chat-head">Start a conversation about this!</div>
      <ChatButtons small />
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Question from "./Question";
import ChatButtons from "./ChatButtons";
export default {
  name: "Quiz",
  components: { Question, ChatButtons },
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
  &-chat {
    margin-top: 1em;
    border-top: 1px solid #ccc;
    @media only screen and (min-width: 700px) {
      max-width: 20em;
      margin: 1em auto 0;
    }
    &-head {
      font-size: 0.8em;
    }

    &-links {
      &-button {
        margin-top: 0.5em;
        font-size: 0.8em;
      }
    }
  }
}
</style>