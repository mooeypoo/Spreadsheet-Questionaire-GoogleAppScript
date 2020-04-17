<template>
  <div class="chat-buttons">
    <b-button
      pill
      class="chat-buttons-button"
      :href="slackLink"
      target="_blank"
      :variant="buttonData.variant"
    >
      <img src="https://img.icons8.com/officexs/16/000000/slack.png" />
      <small>Slack</small>
      {{buttonData.text.slack}}
    </b-button>
    <b-button
      pill
      class="chat-buttons-button"
      :href="ircLink"
      target="_blank"
      :variant="buttonData.variant"
    >
      <!-- <img src="https://img.icons8.com/ios-glyphs/24/000000/chat.png" /> -->
      <b-icon-hash></b-icon-hash>
      <small>IRC</small>
      {{buttonData.text.irc}}
    </b-button>
  </div>
</template>

<script>
import Tools from "../services/Tools";
export default {
  name: "ChatButtons",
  props: ["small", "small-dark"],
  computed: {
    slackLink: function() {
      return Tools.isMobileOrTablet()
        ? "slack://channel?team=T024KLHS4&id=C0120P3BKDZ"
        : "https://wikimedia.slack.com/archives/C0120P3BKDZ";
    },
    ircLink: function() {
      return Tools.isMobileOrTablet()
        ? "https://webchat.freenode.net/?channels=wikimedia-staff"
        : "https://www.irccloud.com/invite?channel=%23wikimedia-staff&hostname=irc.freenode.net&port=6697&ssl=1";
    },
    buttonData: function() {
      if (this.small !== undefined) {
        return {
          variant: "outline-secondary",
          text: { irc: "", slack: "" }
        };
      } else if (this.smallDark !== undefined) {
        return {
          variant: "dark",
          text: { irc: "", slack: "" }
        };
      }

      return {
        variant: "dark",
        text: {
          irc: "#wikimedia-staff",
          slack: "#distantsocializing"
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-buttons {
  small {
    font-family: "Courier New", Courier, monospace;
  }
}
</style>