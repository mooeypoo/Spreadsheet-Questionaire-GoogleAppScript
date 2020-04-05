<template>
  <div>
    <h1>Quiz yourself!</h1>
    <div class="wrapper">
      <div class="question">
        <Question v-bind:data="current" />
      </div>
      <div class="score">
        <h1>Score</h1>
        <h2>{{ score }}/{{ total }}</h2>
      </div>
    </div>
    <!-- <div v-for="q in questions" :key="q.text">
      <h2>{{ q.text }}</h2>
    </div> -->
  </div>
</template>

<script>
import Question from './Question';
export default {
  name: 'Quiz',
  props: ['questions'],
  components: { Question },
  data() {
    return {
      score: 0,
      total: 0,
      completed: [],
    };
  },
  computed: {
    current: function () {
      console.log('question 0', this.questions[0]);
      return this.questions[0];
    },
  },
  methods: {
    nextQuestion: function () {
      this.completed.push(this.questions[0]);
      this.questions.shift();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  width: 100%;
}

.question {
  flex-grow: 2;
}

.score {
  background-color: #ffd3e2;
  border: 2px solid #e57c9f;
  padding: 0.5em;

  h1 {
    font-size: 1.3em;
  }

  h2 {
    font-size: 2.5em;
    text-align: center;
    font-weight: bold;
  }
}
</style>
