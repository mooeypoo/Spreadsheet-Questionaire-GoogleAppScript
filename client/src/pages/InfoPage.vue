<template>
  <div class="page-wrapper page-info">
    <div class="page-header">
      <h1>What is this?</h1>
    </div>
    <div class="page-content">
      <b-alert show variant="primary">
        Welcome to the Wikimedia Foundation experimental
        <span class="emphasis">distant socializing</span> experiment.<br />
		This is our place to continue connecting, remotely.
      </b-alert>
      <h2>What is the pop quiz?</h2>
      <b-alert show variant="primary">This quiz is a way to connect and get to know your fellow WMF'ers by interacting with the tidbits they've shared about themselves. The idea isn't competition -- it's connection.</b-alert>
      <h3>How does it work?</h3>
      <b-alert show variant="primary">
		  The information in this quiz is taken from a form we've shared with you. The form included a few fun questions that were aimed at hashing out some of the great hidden gems and factoids about our peers. By playing the quiz, you can learn about your peers and, hopefully, feel the connections that we share.</b-alert>
      <p>The quiz has very basic rules of operation:</p>
      <ul class="rules">
        <li><span class="emphasis">Driven by the form data</span><br />
		All questions are built from the form data, and are updated from the information in it.</li>
        <li><span class="emphasis">The score doesn't matter</span></br />
		It's not stored anywhere, and doesn't really matter.</li>
        <li><span class="emphasis">Everything resets on reload</span><br />
		This means that every time you reload the page, you get the questions newly reshuffled and your score resets.</li>
        <li><span class="emphasis">Works only for wikimedia.org accounts</span><br />
		You can play this quiz on any browser that is signed into your wikimedia.org account. Yes, mobile too.</li>
        <li><span class="emphasis">The data is stored in the wikimedia Google Doc domain.</span>
          The code is
          <a
            href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript"
            target="_blank"
          >open sourced</a>, but the content of the questions and answered are never shared outside the Foundation servers!
        </li>
      </ul>
      <h3>I want in!</h3>
      <b-alert show variant="primary">Fret not! The quiz here is updated automatically, which means that you can still have your fun tidbits shared by filling the quiz yourself.</b-alert>
      <div class="button-box">
        <b-button
          variant="warning"
          href="https://forms.gle/aHtXuw2ToNR4287u9"
          target="_blank"
        >Click here to fill in the form</b-button>
      </div>
      <b-alert show variant="warning">
        <span class="emphasis">Note:</span> If you've previously answered the form, you can also use the button above to edit or add to your responses.
      </b-alert>
      <h2>Credits and Participation</h2>
	  <p>Participating is appreciated! Please add feature requests, bug reports and general contributions: <b-button variant="warning" href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript" target="_blank">GitHub<sup>
                    <b-icon icon="box-arrow-up-right
"></b-icon>
                  </sup></b-button></p>
	<p>This experiment was brought you by</p>
	<ul>
		<li><span class="emphasis">Development:</span> Moriel Schottlender </li>
		<li><span class="emphasis">Guidance, ideas, and support:</span> Cara Palanca</li>
		<li><span class="emphasis">Design guidance:</span> Jess Klein</li>
		</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPage"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.page-info .page-content {
  font-size: 1.2em;
  h2 {
    font-weight: bold;
    text-align: center;
    margin: 1em 0 0.5em 0;
    border-bottom: 1px solid $dark-box-font;
  }
  h3 {
    font-weight: bold;
    text-align: center;
    margin: 0.7em 0 0.2em 0;
  }
  .emphasis {
	font-weight: bold;
  }

	.rules a {
		color: $dark-box-font;
		border-bottom: 1px dashed $dark-box-font;
	}

	li {
		margin-bottom: 1em;
		.emphasis {
			font-size: 1.2em;
		}
	}
  .button-box {
    text-align: center;
    margin: 1em 0;
  }
}
</style>