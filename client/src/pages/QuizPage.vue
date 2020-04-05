<template>
  <div>
    <b-spinner
      v-if="!ready"
      variant="primary"
      type="grow"
      label="Spinning"
    ></b-spinner>
    <Quiz />
  </div>
</template>

<script>
import Quiz from '../components/Quiz';
import { mapState } from 'vuex';
export default {
  name: 'QuizPage',
  components: { Quiz },
  computed: {
    ...mapState({
      ready: (state) => state.quiz.ready,
      error: (state) => state.quiz.error,
    }),
  },
};
</script>

<style scoped></style>
