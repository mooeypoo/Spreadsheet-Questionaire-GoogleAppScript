'use strict';
import Tools from './Tools';

/**
 * Build the quiz questions out of spreadsheet data
 * and the configurable column structure.
 */
class QuizBuilder {
  /**
   *
   * @param {String[][]} rows Array of rows, comprised of array of column values
   * @param {Object} config Configuration object.
   * @param {Number} [config.num_options=6] Number of options to provide with each question
   * @param {Object} [config.structure={}] Definition for the spreadsheet column structure
   */
  constructor(rows, config = {}) {
    this.numOptions = config.num_options || 6;
    this.structure = config.structure || {};
    this.columnNames = Object.keys(this.structure);
    this.questions = [];
    this.names = this.collectNames(rows);
    this.buildQuestions(rows);
  }

  /**
   * Build the questions from the definition and given rows.
   *
   * @param {String[][]} rows
   */
  buildQuestions(rows) {
    const colQuestions = this.columnNames.filter((colName) => {
      return this.structure[colName].question;
    });

    // Go over rows
    let questions = [];
    rows.forEach((row) => {
      // TODO: Make solution configurable, so it can be something other than name
      const nameColId = this.getColumnIdByName('name');
      const sol = row[nameColId];
      colQuestions.forEach((colName) => {
        if (row[this.getColumnIdByName(colName)]) {
          questions.push({
            category: colName,
            question: this.structure[colName].question_title,
            text: row[this.getColumnIdByName(colName)],
            solution: sol,
            options: this.getNameOptions(sol),
            status: {
              chosen: null,
              correct: false,
            },
          });
        }
      });
    });

    this.questions = Tools.shuffle(questions);
  }

  /**
   * Collect the names from the spreadsheet, shuffle, and provide
   * a number of random options for each question.
   *
   * @param {string} includedName
   */
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

  /**
   * Get the questions
   * @return Array An array of question-date, with the content,
   *  answer options, type, and status.
   */
  getQuestions() {
    return this.questions;
  }

  /**
   * Get the array of names of those who filled in the form
   */
  getNames() {
    return this.names;
  }

  /**
   * Process the rows from the spreadsheet and collect all names.
   * @param {Array} rows
   */
  collectNames(rows) {
    let names = [];
    const nameColId = this.getColumnIdByName('name');
    rows.forEach((row) => {
      let name = row[nameColId];
      if (name) {
        names.push(name);
      }
    });

    return names;
  }
  /**
   * Get the index of the column within the rows, based on its
   * symbolic name from the given structure definition.
   *
   * @param {string} colName Column name
   * @returns {Number} Index of the column in the row array
   */
  getColumnIdByName(colName = '') {
    return this.columnNames.indexOf(colName);
  }
}

export default QuizBuilder;
