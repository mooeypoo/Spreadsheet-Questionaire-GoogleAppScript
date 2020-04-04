'use strict';

class Backend {
  constructor() {}

  getQuestions() {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(function (res) {
          resolve(res);
        })
        .withFailureHandler(function (res) {
          reject(res);
        })
        .getQuestions();
    });
  }
}

export default Backend;
