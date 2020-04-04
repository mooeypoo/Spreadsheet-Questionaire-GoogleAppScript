<template>
  <div>
    <h1>Welcome to the quiz!</h1>
    <Quiz v-bind:questions="questions" />
  </div>
</template>

<script>
import Quiz from "../components/Quiz";
import Backend from "../services/Backend";
export default {
  name: "MainPage",
  components: Quiz,
  data() {
    return {
      bw: new Backend(),
      questions: []
    };
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    getQuestions() {
      this.bw.getQuestions().then(
        function(res) {
          console.log("MainPage getQuestions", res);
          this.questions = res;
        }.bind(this),
        function(res) {
          console.log("MainPage error", err);
        }.bind(this)
      );
    }
  }
};
</script>

<style scoped>
</style>