<template>
  <div>
    <b-spinner
      v-if="!ready"
      variant="primary"
      type="grow"
      label="Spinning"
    ></b-spinner>
    <Quiz v-bind:questions="questions" />
  </div>
</template>

<script>
import Quiz from '../components/Quiz';
import Backend from '../services/Backend';
export default {
  name: 'QuizPage',
  components: { Quiz },
  data() {
    return {
      bw: new Backend(),
      questions: [],
      error: false,
    };
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    ready() {
      return !this.questions && !this.error;
    },
    getQuestions() {
      this.bw.getQuestions().then(
        function (res) {
          console.log('MainPage getQuestions', res);
          this.questions = res;
        }.bind(this),
        function (res) {
          console.log('MainPage error', err);
          this.error = true;
        }.bind(this)
      );
    },
  },
};
</script>

<style scoped></style>
