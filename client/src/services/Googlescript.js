'use strict';

class Googlescript {
  constructor() {
    this.rowsPromise = null;
  }
  getRows() {
    if (this.rowsPromise) {
      return this.rowsPromise;
    }
    this.rowsPromise = new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(function(res) {
          resolve(res);
        })
        .withFailureHandler(function(res) {
          reject(res);
        })
        .getRows();
    });

    return this.rowsPromise;
  }
}

export default Googlescript;
