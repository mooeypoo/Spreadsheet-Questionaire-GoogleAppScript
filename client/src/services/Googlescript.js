'use strict';

class Googlescript {
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

export default Googlescript;
