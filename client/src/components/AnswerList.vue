<template>
  <div class="answer-list">
    <h1>Answered</h1>
    <h2>You've answered {{ completed.length }} questions. You're {{ percent }}% correct!</h2>
    <div class="answer-list-wrapper">
      <AnswerDisplay v-for="(q, index) in completed" :key="index" :data="q" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AnswerDisplay from "./AnswerDisplay";
export default {
  name: "AnswerList",
  components: { AnswerDisplay },
  created() {
    this.$store.dispatch("quiz/getNames");
  },
  computed: {
    percent: function() {
      return Math.ceil((this.score.correct / this.score.completed) * 100);
    },
    ...mapGetters("quiz", {
      score: "getScore",
      completed: "allCompleted"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.answer-list {
  width: 100%;
  text-align: center;

  h1 {
    color: $dark-box-font;
    font-size: 1.5em;
  }
  h2 {
    color: $dark-box-font;
    font-size: 0.7em;
  }
  &-wrapper {
    padding: 2em 3em;
    background-color: $light-box-bg;
    @media only screen and (max-width: 500px) {
      padding: 1em;
    }
  }
}
</style>