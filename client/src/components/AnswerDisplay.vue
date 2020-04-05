<template>
  <div class="answer">
    <b-card :title="data.text">
      <b-card-text
        ><b-badge variant="info">{{ category }}</b-badge
        >{{ data.name }}</b-card-text
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AnswerDisplay',
  props: ['data'],
  computed: {
    category: function () {
      if (this.data.category === 'fun_title') {
        return 'Fun title';
      } else {
        return 'Fact';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.answer {
  margin: 1em 0;
}
.badge {
  margin-right: 1em;
}
</style>
