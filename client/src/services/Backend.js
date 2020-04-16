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

class Backend {
  constructor() {
    this.questions = [];
    this.slideshow = {};
    if (window.google !== undefined) {
      this.script = new Googlescript();
    } else {
      this.script = new Mockscript();
    }
  }

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
