'use strict';
import Tools from './Tools';

class QuizBuilder {
  constructor(rows, config = {}) {
    this.numOptions = config.num_options || 6;
    this.structure = config.structure || {};
    this.columnNames = Object.keys(this.structure);
    this.questions = [];
    this.names = this.collectNames(rows);
    this.buildQuestions(rows);
  }
  buildQuestions(rows) {
    const colQuestions = this.columnNames.filter(colName => {
      return this.structure[colName].question;
    });

    // Go over rows
    let questions = [];
    rows.forEach(row => {
      // TODO: Make solution configurable, so it can be something other than name
      const nameColId = this.getColumnIdByName('name');
      const sol = row[nameColId];
      colQuestions.forEach(colName => {
        if (row[this.getColumnIdByName(colName)]) {
          questions.push({
            category: colName,
            question: this.structure[colName].question_title,
            text: row[this.getColumnIdByName(colName)],
            solution: sol,
            options: this.getNameOptions(sol),
            status: {
              chosen: null,
              correct: false
            }
          });
        }
      });
    });

    this.questions = Tools.shuffle(questions);
  }
  getNameOptions(includedName = '') {
    let names = Tools.shuffle(this.names);
    let options = names.slice(0, this.numOptions - 1);
    if (includedName && options.indexOf(includedName) === -1) {
      // Add the included name
      options.push(includedName);
    } else {
      // Add another option
      options.push(names[this.numOptions - 1]);
    }
    // Return reshuffled
    return Tools.shuffle(options);
  }

  getQuestions() {
    return this.questions;
  }

  getNames() {
    return this.names;
  }

  collectNames(rows) {
    let names = [];
    const nameColId = this.getColumnIdByName('name');
    rows.forEach(row => {
      let name = row[nameColId];
      if (name) {
        names.push(name);
      }
    });

    return names;
  }

  getColumnIdByName(colName = '') {
    return this.columnNames.indexOf(colName);
  }
}

export default QuizBuilder;
