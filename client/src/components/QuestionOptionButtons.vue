<template>
  <div class="option-buttons">
    <div class="option-buttons-button" v-for="opt in options" :key="opt">
      <div class="option-buttons-button-image">
        <img v-if="getImgSrc(opt)" :src="getImgSrc(opt)" v-on:click="setAnswer(opt)" />
      </div>
      <b-button
        squared
        class="option-buttons-button-clickable"
        :variant="getButtonVariant(opt)"
        :disabled="isAnswered"
        v-on:click="setAnswer(opt)"
      >{{opt}}</b-button>
    </div>
  </div>
</template>

<script>
import peopleimages from "../../../data/peopleimages.json";
export default {
  name: "QuestionOptionButtons",
  props: ["options", "isAnswered", "chosen", "solution"],
  methods: {
    getImgSrc(opt) {
      return (
        (peopleimages[opt] &&
          peopleimages[opt].img &&
          peopleimages[opt].img.src) ||
        (peopleimages.default &&
          peopleimages.default.img &&
          peopleimages.default.img.src)
      );
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
      this.$emit("answered", answer);
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
    margin: 1em;
    @media only screen and (max-width: 800px) {
      margin: 0.2em auto;
    }

    &-clickable {
      @media only screen and (max-width: 500px) {
        font-size: 0.8em;
      }
    }

    &-image {
      max-width: 200px;
      max-height: 150px;
      overflow: hidden;
      @media only screen and (max-width: 800px) {
        max-width: 120px;
        max-height: 100px;
      }

      img {
        width: 200px;
        @media only screen and (max-width: 800px) {
          width: 120px;
        }
      }
    }
  }
}
</style>