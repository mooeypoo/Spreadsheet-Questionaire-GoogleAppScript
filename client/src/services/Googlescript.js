'use strict';

class Googlescript {
  getRows() {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(function(res) {
          resolve(res);
        })
        .withFailureHandler(function(res) {
          reject(res);
        })
        .getRows();
    });
  }
}

export default Googlescript;
