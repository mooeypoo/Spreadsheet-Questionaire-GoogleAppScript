<template>
  <div class="slide" :class="sizeClass">
    <div class="slide-content">{{data.content}}</div>
    <div class="slide-name">
      <span class="slide-name-by">by&nbsp;</span>
      {{data.name}}
      <span v-if="emoji" class="slide-name-emoji">&nbsp;{{emojiIcon}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: ["data", "small", "emoji"],
  computed: {
    sizeClass: function() {
      return this.small !== undefined ? "slide-small" : "";
    },
    emojiIcon: function() {
      return this.emoji !== undefined ? this.emoji : "";
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";
.slide {
  color: $light-box-font;
  width: 100%;
  padding: 2em 3em;
  border-bottom: 1em solid $dark-box-bg;
  background-color: $light-box-bg;
  @media only screen and (max-width: 500px) {
    padding: 1em 1.5em;
  }
  &.slide-small {
    padding: 1em;
  }

  &-content {
    text-align: center;
    font-size: 2.5em;
    @media only screen and (max-width: 500px) {
      font-size: 1.5em;
    }
    .slide-small & {
      font-size: 1em;
    }
  }
  &-name {
    text-align: right;
    margin: 1em 0 0;
    font-size: 1.5em;
    font-weight: bold;

    @media only screen and (max-width: 500px) {
      font-size: 1.2em;
    }

    .slide-small & {
      font-size: 1em;
    }
    &-by {
      font-size: 0.7em;
    }
  }
}
</style>