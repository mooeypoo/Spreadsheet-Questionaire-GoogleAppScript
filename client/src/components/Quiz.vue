<template>
  <div>
    <h1>Quiz yourself!</h1>
    <div class="wrapper">
      <div class="score">
        <h1>Score</h1>
        <h2>{{ score }}/{{ total }}</h2>
      </div>
      <div class="question">
        <Question
          v-if="current"
          v-bind:data="current"
          @answered="onAnswered"
          @next="onNextQuestion"
        />
        <div v-if="showEnd">That's it!</div>
      </div>
    </div>
    <h2 v-if="showAnswerBlock" class="answers-title">Answered</h2>
    <div v-if="showAnswerBlock" class="answers">
      <div class="answers-correct">
        <h3>Correct!</h3>
        <AnswerDisplay
          v-for="q in completed.correct"
          :key="q.text"
          v-bind:data="q"
        />
      </div>
      <div class="answers-incorrect">
        <h3>Close enough...</h3>
        <AnswerDisplay
          v-for="q in completed.incorrect"
          :key="q.text"
          v-bind:data="q"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Question from './Question';
import AnswerDisplay from './AnswerDisplay';
export default {
  name: 'Quiz',
  components: { Question, AnswerDisplay },
  computed: {
    ...mapGetters('quiz', {
      current: 'currentQuestion',
      showAnswerBlock: 'areAnyCompleted',
      showEnd: 'isEnded',
    }),
    ...mapState({
      questions: (state) => state.quiz.questions,
      score: (state) => state.quiz.score,
      total: (state) => state.quiz.total,
      completed: (state) => state.quiz.completed,
    }),
  },
  created() {
    // Ask for the questions
    this.$store.dispatch('quiz/getQuestions');
  },
  methods: {
    // ...mapActions('quiz', ['nextQuestion']),
    onNextQuestion(isCorrect) {
      this.$store.dispatch('quiz/goToNextQuestion', isCorrect);
    },
    onAnswered(data) {
      this.$store.dispatch('quiz/submitAnswer', data.isCorrect);
    },
  },
  // data() {
  //   return {
  //     score: 0,
  //     total: 0,
  //     completed: {
  //       correct: [],
  //       incorrect: [],
  //     },
  //   };
  // },
  // computed: {
  //   current: function () {
  //     return this.questions ? this.questions[0] : {};
  //   },
  //   showAnswerBlock: function () {
  //     return this.completed.correct.length || this.completed.incorrect.length;
  //   },
  //   showEnd: function () {
  //     return (
  //       !this.questions.length &&
  //       (this.completed.correct.length || this.completed.incorrect.length)
  //     );
  //   },
  // },
  // methods: {
  //   nextQuestion: function (isCorrect) {
  //     if (isCorrect) {
  //       this.completed.correct.push(this.questions[0]);
  //       console.log('correct', this.completed.correct);
  //     } else {
  //       this.completed.incorrect.push(this.questions[0]);
  //       console.log('incorrect', this.completed.incorrect);
  //     }
  //     this.questions.shift();
  //   },
  //   onAnswered(data) {
  //     this.total++;
  //     if (data.isCorrect) {
  //       this.score++;
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin-bottom: 1em;
}

.question {
  flex-grow: 2;
  margin-right: 1em;
}

.answers {
  display: flex;
  justify-content: space-between;

  &-correct {
    border: 1px solid green;
    width: 50%;
  }
  &-incorrect {
    border: 1px solid red;
    width: 50%;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    padding: 0.5em 0;
  }
}

.score {
  float: right;
  background-color: #aadaef;
  border: 2px solid #2196f3;
  padding: 0.5em;
  height: 50%;

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
