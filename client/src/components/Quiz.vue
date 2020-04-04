<template>
  <div>
    <h2>Quiz</h2>
    <div v-for="q in questions" :key="q.text">
      <h2>{{ q.text}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: ["questions"]
};
</script>

<style>
</style>