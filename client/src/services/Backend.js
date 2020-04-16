'use strict';
import Googlescript from './Googlescript';
import Mockscript from './Mockscript';
import QuizBuilder from './QuizBuilder';
import SlideshowBuilder from './SlideshowBuilder';

// TODO: Move this to a config file?
const config = {
  num_options: 4,
  structure: {
    /*timestamp: {},*/
    email: {},
    official_title: {},
    fun_title: {
      question: true,
      question_title: 'Whose fun title is this?',
    },
    nickname: {},
    dog_cat: {},
    fact: {
      question: true,
      question_title: 'Whose surprising fact is this?',
    },
    jokes: {
      slideshow: true,
    },
    animal: {},
    videocalls: {},
    name: {},
  },
};

/**
 * Collect and process spreadsheet rows into the data needed for the app.
 */
class Backend {
  /**
   * Initialize the engine depending on whether the environment is
   * Google App Script production, or local mock script.
   *
   * @constructor
   */
  constructor() {
    this.questions = [];
    this.slideshow = {};
    if (window.google !== undefined) {
      this.script = new Googlescript();
    } else {
      this.script = new Mockscript();
    }
  }

  /**
   * Fetch the rows and produce the questions.
   * Cache the questions object so it can be recalled.
   */
  getQuestions() {
    if (this.questions.length) {
      // If qustions are already built, return it
      return new Promise(
        function(resolve) {
          resolve(this.questions);
        }.bind(this)
      );
    }

    // Build the questions
    return this.script.getRows().then(
      function(rows) {
        const builder = new QuizBuilder(rows, config);
        this.questions = builder.getQuestions();
        return this.questions;
      }.bind(this),
      function(error) {}
    ); //promise
  }

  /**
   * Fetch the rows and produce the slides, based on the given column name.
   * Cache the result object so it can be recalled.
   * @param {string} colname The name of the column that produces the
   *  content of the slideshow. The other column required is "name" for
   *  the attribution.
   */
  getSlides(colname) {
    if (
      this.slideshow &&
      this.slideshow[colname] &&
      this.slideshow[colname].length
    ) {
      // If slideshow is already built, return it
      return new Promise(
        function(resolve) {
          resolve(this.slideshow[colname]);
        }.bind(this)
      );
    }

    // Build the questions
    return this.script.getRows().then(
      function(rows) {
        const builder = new SlideshowBuilder(rows, colname, config);
        this.slideshow[colname] = builder.getSlides();
        return this.slideshow;
      }.bind(this),
      function(error) {}
    ); //promise
  }
}

export default Backend;
