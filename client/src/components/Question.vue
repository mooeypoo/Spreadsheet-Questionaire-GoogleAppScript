<template>
  <div class="question">
    <h1 class="question-title">{{ current.question }}</h1>
    <h2 class="question-text">{{ current.text }}</h2>
    <div class="question-options">
      <b-button
        :variant="getButtonVariant(opt)"
        v-for="opt in current.options"
        :key="opt"
        :disabled="isAnswered"
        v-on:click="setAnswer(opt)"
        class="question-button"
      >{{ opt }}</b-button>
    </div>
    <div v-if="isAnswered" class="question-next">
      <b-alert class="question-next-alert" show v-if="current.status.correct" variant="success">
        Correct!
        <strong>{{ current.solution }}</strong>
      </b-alert>
      <b-alert class="question-next-alert" show v-if="!current.status.correct" variant="danger">
        Not quite!
        <strong>{{ current.solution }}</strong>
      </b-alert>
      <b-button variant="danger" class="question-next-button btn-lg" v-on:click="goNextQuestion">
        Give me another!
        <b-icon-arrow-right></b-icon-arrow-right>
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Question",
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
    },
    getButtonVariant: function(butName) {
      if (this.current.status.chosen && this.current.solution === butName) {
        // Correct answer
        return "success";
      } else if (
        this.current.status.chosen === butName &&
        this.current.solution !== butName
      ) {
        // Chosen but is not the correct answer
        return "outline-danger";
      } else {
        // Not chosen, not the solution
        return "outline-primary";
      }
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
    padding: 1em 1.5em;
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
    &-alert {
      font-size: 0.9em;
    }

    &-button {
      font-size: 1.5em;
    }
  }
  &-options {
    width: 100%;
    display: flex;
    margin-top: 1em;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;

    .question-button {
      font-size: 1.5em;
      @media only screen and (max-width: 710px) {
        font-size: 1em;
      }
    }

    @media only screen and (max-width: 500px) {
      display: block;
      text-align: center;
    }
  }

  &-button {
    margin: 0 1em 1em;
    &-correct {
      border-width: 4px;
    }
    &-chosen {
      background-color: #ccc;
    }
  }
}
</style>
