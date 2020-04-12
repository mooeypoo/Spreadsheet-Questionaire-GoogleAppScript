'use strict';
const fakeRows = [
  [
    // '123234',
    'foo@bar.com',
    'Official title 1',
    'Fun title 1',
    'nickname1',
    'dogperson1',
    'Some fact 1',
    'joke1',
    'animal1',
    'videocall1',
    'Person 1'
  ],
  [
    // '113234',
    'foo2@bar.com',
    'Official title 2',
    'Fun title 2',
    'nickname2',
    'dogperson2',
    'Some fact 2',
    'joke2',
    'animal2',
    'videocall2',
    'Person 2'
  ],
  [
    // '113234',
    'foo3@bar.com',
    'Official title 3',
    'Fun title 3',
    'nickname3',
    'dogperson3',
    'Some fact 3',
    'joke3',
    'animal3',
    'videocall3',
    'Person 3'
  ],
  [
    // '113234',
    'foo4@bar.com',
    'Official title 4',
    'Fun title 4',
    'nickname4',
    'dogperson4',
    'Some fact 4',
    'joke4',
    'animal4',
    'videocall4',
    'Person 4'
  ]
];
class Mockscript {
  getRows() {
    return this.delay(fakeRows);
  }
  delay(value) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(value);
      }, 500);
    });
  }
}

export default Mockscript;
