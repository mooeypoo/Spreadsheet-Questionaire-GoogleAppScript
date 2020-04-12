<template>
  <div class="answer">
    <div class="answer-wrapper">
      <div class="answer-meta">
        <b-badge pill :variant="category.variant">{{ category.text }}</b-badge>
        <b-badge variant="dark">{{ data.solution }}</b-badge>
      </div>
      <div class="answer-text">{{ data.text }}</div>
      <div v-if="isCorrect" class="answer-correct">
        <b-icon icon="check-circle" variant="success"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerDisplay",
  props: ["data"],
  computed: {
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
    },
    categoryVariant: function() {}
  }
};
</script>

<style lang="scss" scoped>
.answer {
  margin: 1em 0;

  &-wrapper {
    display: flex;
  }
  &-text {
    flex-grow: 2;
  }
}
.badge {
  margin-right: 1em;
}
</style>
