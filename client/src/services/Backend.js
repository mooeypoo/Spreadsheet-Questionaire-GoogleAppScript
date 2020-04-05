'use strict';
import Googlescript from './Googlescript';
import Mockscript from './Mockscript';

class Backend {
  constructor() {
    if (window.google !== undefined) {
      this.script = new Googlescript();
    } else {
      this.script = new Mockscript();
    }
  }

  getQuestions() {
    return this.script.getQuestions();
  }
}

export default Backend;
