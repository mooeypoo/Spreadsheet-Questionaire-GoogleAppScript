'use strict';
const fakeQuestions = [
  {
    category: 'fun_title',
    text: 'Fun title question 1',
    options: ['person1', 'person2', 'person3'],
    name: 'person2',
  },
  {
    category: 'fun_title',
    text: 'Fun title question 2',
    options: ['person10', 'person20', 'person30'],
    name: 'person20',
  },
  {
    category: 'fact',
    text: 'Fact question 1',
    options: ['person110', 'person210', 'person310'],
    name: 'person210',
  },
  {
    category: 'fact',
    text: 'Fact question 2',
    options: ['person120', 'person220', 'person320'],
    name: 'person220',
  },
];
class Mockscript {
  getQuestions() {
    return this.delay(fakeQuestions);
  }
  delay(value) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(value);
      }, 500);
    });
  }
}

export default Mockscript;
