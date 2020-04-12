'use strict';

class Tools {
  static shuffle(arr = []) {
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (0 < currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      let temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  }
}

export default Tools;
