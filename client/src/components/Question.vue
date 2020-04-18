<template>
  <div class="question">
    <h1 class="question-title">{{ current.question }}</h1>
    <h2 class="question-text">{{ current.text }}</h2>
    <div v-if="isAnswered" class="question-next">
      <b-alert class="question-next-alert" show v-if="current.status.correct" variant="success">
        Correct!
        <br />
        <strong>{{ current.solution }}</strong>
      </b-alert>
      <b-alert class="question-next-alert" show v-if="!current.status.correct" variant="danger">
        Not quite!
        <br />
        <strong>{{ current.solution }}</strong>
      </b-alert>
      <b-button variant="warning" class="question-next-button btn-lg" v-on:click="goNextQuestion">
        Give me another!
        <b-icon-arrow-right></b-icon-arrow-right>
      </b-button>
    </div>
    <div class="question-options">
      <QuestionOptionButtons
        :options="current.options"
        :isAnswered="isAnswered"
        :chosen="current.status.chosen"
        :solution="current.solution"
        v-on:answered="setAnswer"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import QuestionOptionButtons from "./QuestionOptionButtons";
export default {
  name: "Question",
  components: { QuestionOptionButtons },
  computed: {
    ...mapGetters("quiz", {
      current: "currentQuestion",
      title: "currentQuestionTitle",
      isAnswered: "isCurrentQuestionAnswered"
    })
  },
  methods: {
    setAnswer: function(answer) {
      this.$store.dispatch("quiz/submitCurrentAnswer", answer);
    },
    goNextQuestion: function() {
      this.$store.dispatch("quiz/goToNextQuestion");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.question {
  color: $light-box-font;
  width: 100%;
  padding: 2em 3em;
  text-align: center;
  background-color: $light-box-bg;
  @media only screen and (max-width: 500px) {
    padding: 0.5em;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;

    @media only screen and (max-width: 500px) {
      font-size: 1.3em;
    }
  }
  h2 {
    margin-top: 0.5em;
    font-size: 2.5em;
    @media only screen and (max-width: 500px) {
      font-size: 1.5em;
    }
  }

  &-next {
    display: flex;
    margin: 1em 0;
    justify-content: space-between;
    align-items: stretch;

    @media only screen and (max-width: 700px) {
      display: block;
    }
    &-alert {
      flex-grow: 1;
      font-size: 0.9em;
    }

    &-button {
      margin-left: 2em;
      font-size: 1.5em;
      @media only screen and (max-width: 500px) {
        margin-left: 0;
      }
    }
  }
}
</style>
