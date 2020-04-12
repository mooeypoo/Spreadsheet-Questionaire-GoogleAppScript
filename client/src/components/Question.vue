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
      <b-button variant="primary" v-on:click="goNextQuestion">Give me another!</b-button>
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
  width: 100%;
  padding: 2em 3em;
  text-align: center;
  border-bottom: 3em solid $dark-box-bg;
  background-color: $light-box-bg;

  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    margin-top: 0.5em;
    font-size: 2.5em;
  }
  &-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin-top: 2em;
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
