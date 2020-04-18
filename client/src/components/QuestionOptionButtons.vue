<template>
  <div class="option-buttons">
    <div
      class="option-buttons-button"
      :class="getButtonClass(opt)"
      v-for="opt in options"
      :key="opt"
      v-on:click="setAnswer(opt)"
    >
      <div class="option-buttons-button-image" v-if="getImgStyle(opt)" :style="getImgStyle(opt)"></div>
      <div class="option-buttons-button-text">{{opt}}</div>
      <!-- <b-button
        squared
        class="option-buttons-button-clickable"
        :variant="getButtonVariant(opt)"
      >{{opt}}</b-button>-->
    </div>
  </div>
</template>

<script>
import peopleimages from "../../../data/peopleimages.json";
export default {
  name: "QuestionOptionButtons",
  props: ["options", "isAnswered", "chosen", "solution"],
  methods: {
    getImgStyle(opt) {
      const imgSrc = peopleimages[opt] || peopleimages.default;
      return `background-image: url('${imgSrc}');`;
    },
    getButtonClass: function(butName) {
      if (!this.chosen) {
        return "opt-active";
      }

      if (this.solution === butName) {
        // Correct answer
        return "opt-correct";
      } else if (this.chosen === butName && this.solution !== butName) {
        // Chosen but is not the correct answer
        return "opt-incorrect";
      }
    },
    getButtonVariant: function(butName) {
      if (this.chosen && this.solution === butName) {
        // Correct answer
        return "success";
      } else if (this.chosen === butName && this.solution !== butName) {
        // Chosen but is not the correct answer
        return "outline-danger";
      } else {
        // Not chosen, not the solution
        return "outline-primary";
      }
    },
    setAnswer: function(answer) {
      if (!this.chosen) {
        this.$emit("answered", answer);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.option-buttons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: flex-start;

  &-button {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    margin: 1em;
    width: 150px + 20px;

    @media only screen and (max-width: 800px) {
      margin: 0.2em auto;
      width: 120px + 20px;
    }

    @media only screen and (max-width: 500px) {
      margin: 0.2em;
      width: 100px + 20px;
    }

    .option-buttons-button-text {
      padding: 0.375em 0.75em;
      margin-top: 0.5em;
      border: 1px solid;
      opacity: 0.65;
      @media only screen and (max-width: 500px) {
        padding: 0.2em 0.5em;
      }
    }

    &.opt-correct .option-buttons-button-text {
      background-color: #28a745;
      border-color: #28a745;
      color: white;
    }

    &.opt-incorrect .option-buttons-button-text {
      border-color: #dc3545;
      color: #dc3545;
    }

    &.opt-active {
      .option-buttons-button-text {
        color: #007bff;
        border-color: #007bff;
        opacity: 1;
      }

      &:hover {
        background-color: #cdbde5;
      }
    }

    &-text {
      padding: 0.5em 0;
      @media only screen and (max-width: 500px) {
        font-size: 0.8em;
        padding: 0.1em;
        border: 0;
      }
    }

    &-image {
      margin: 1em auto 0;
      height: 150px;
      width: 150px;
      border-radius: 5px;
      background: #d8d8d8;
      background-position: center center;
      background-size: cover;
      @media only screen and (max-width: 800px) {
        margin: 0.5em auto 0;
        width: 120px;
        height: 120px;
      }
      @media only screen and (max-width: 500px) {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>