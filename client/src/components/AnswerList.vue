<template>
  <div class="answer-list">
    <h1>Answered</h1>
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
  computed: {
    ...mapGetters("quiz", {
      completed: "allCompleted"
    })
  },
  methods: {
    getAccordionHeadProps: function(index) {
      debugger;
      let obj = {};
      obj[`v-b-toggle.accordion-${index}`] = null;
      return obj;
    },
    getAccordionBodyID: function(index) {
      return `accordion-${index}`;
    },
    getBadgeText: function(question) {
      debugger;
      return question.status.correct
        ? "Chosen correctly!"
        : "You were close...";
    },
    getBadgeVariant: function(question) {
      debugger;
      return question.status.correct ? "success" : "danger";
    }
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
  &-wrapper {
    padding: 2em 3em;
    background-color: $light-box-bg;
  }
}
</style>