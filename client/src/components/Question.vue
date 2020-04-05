<template>
  <div class="question" :class="wrapperClass">
    <b-card>
      <div class="question-title">
        {{ displayTitle }}
        <b-badge v-if="answered" variant="info" class="question-title-badge">{{
          data.name
        }}</b-badge>
        <b-badge
          v-if="answered && chosen === data.name"
          variant="success"
          class="question-title-badge"
          >Correct!</b-badge
        >
        <b-badge
          v-if="answered && chosen !== data.name"
          variant="danger"
          class="question-title-badge"
          >Not quite...</b-badge
        >
      </div>
      <b-card-text class="question-text">{{ data.text }} </b-card-text>
      <div v-if="!answered" class="question-options">
        <b-button
          variant="outline-primary"
          v-for="opt in data.options"
          :key="opt"
          :disabled="answered"
          v-on:click="setAnswer(opt)"
          :class="getButtonClass(opt)"
        >
          {{ opt }}
        </b-button>
      </div>
      <div v-if="answered" class="question-next">
        <b-button variant="primary" v-on:click="goNext">
          Give me another!
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['data'],
  data() {
    return {
      answered: !!this.data.chosen,
      chosen: this.data.chosen,
    };
  },
  computed: {
    displayTitle: function () {
      if (this.data.category === 'fun_title') {
        return 'Whose fun title is this?';
      } else {
        return 'Whose surprising fact is this?';
      }
    },
    wrapperClass: function () {
      let c = [];
      if (this.data.state) {
        c.push('result-' + this.data.state);
      }

      if (this.data.category === 'fun_title') {
        c.push('type-title');
      } else if (this.data.category === 'fact') {
        c.push('type-fact');
      }
      return c.join(' ');
    },
  },
  methods: {
    setAnswer: function (answer) {
      this.answered = true;
      this.chosen = answer;
      this.$emit('answered', {
        chosen: answer,
        isCorrect: answer === this.data.name,
      });
    },
    getButtonClass: function (butName) {
      if (this.answered) {
        return {
          'question-button-correct': this.data.name === butName,
          'question-button-chosen': this.chosen === butName,
        };
      }
      return { 'question-button-active': true };
    },
    goNext: function () {
      this.$emit('next', this.chosen === this.data.name);
      this.chosen = null;
      this.answered = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.question {
  margin: 1em 0;

  h1 {
    font-size: 1.2em;
  }

  &-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    border-bottom: 1px solid darkgray;
    &-badge {
      float: right;
      margin-right: 1em;
    }
  }

  &-text {
    font-size: 1.2em;
  }

  &-button {
    &-chosen {
      border-width: 3px;
      font-weight: bold;
    }

    &-correct {
      background-color: #28a745;
      color: black;
    }
  }

  &-options {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 1em 0 0;

    button {
      margin: 0.5em;
    }
  }
  &-next {
    margin: 1em 0 0;
    text-align: center;
  }
}
</style>
