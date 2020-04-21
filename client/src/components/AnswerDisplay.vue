<template>
  <div class="answer">
    <div class="answer-wrapper">
      <div class="answer-category">
        <b-badge pill :variant="category.variant">{{ category.text }}</b-badge>
      </div>
      <div class="answer-text">{{ data.text }}</div>
      <div class="answer-solution">
        <div v-if="isCorrect" class="answer-solution-correct">
          <b-icon icon="check-circle" variant="success"></b-icon>
        </div>
        <div class="answer-solution-name">
          <b-badge variant="dark">{{ data.solution }}</b-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerDisplay",
  props: ["data"],
  computed: {
    /** @return {boolean} */
    isCorrect: function() {
      return this.data.status.correct;
    },
    category: function() {
      if (this.data.category === "fun_title") {
        return {
          text: "Fun title",
          variant: "info"
        };
      } else {
        return {
          text: "Fun fact",
          variant: "warning"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.answer {
  color: $light-box-font;
  padding: 1em 0;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  &-wrapper {
    display: flex;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  &-category {
    margin-right: 1em;
    order: 1;
  }

  &-text {
    text-align: left;
    flex-grow: 2;
    order: 2;
    @media only screen and (max-width: 500px) {
      text-align: center;
      padding: 0.5em 0;
      order: 4;
    }
  }

  &-solution {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    order: 3;

    &-correct {
      margin-right: 0.5em;
    }
  }
}
</style>
