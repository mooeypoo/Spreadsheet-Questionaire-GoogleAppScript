'use strict';
import Tools from './Tools';

class SpreadsheetData {
  constructor() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const lastRow = spreadsheet.getLastRow();
    const rangeObject = sheet.getRange('B2:K' + lastRow);

    this.names = [];
    this.data = {};
    this.questions = [];

    this.rowData = [];

    this.columnNames = [
      'email',
      'official_title',
      'fun_title',
      'nickname',
      'dog_cat',
      'fact',
      'joke',
      'animal',
      'videocalls',
      'name',
    ];
    this.build(rangeObject.getValues());
  }

  build(rowData) {
    let rows = [];

    // Shuffle rows
    rowData = Tools.shuffle(rowData);

    // Restructure the data
    for (let rowNum = 0; rowNum < rowData.length; rowNum++) {
      // const name = rowData[rowNum][this.getColumnId('name')];
      // TODO: Change this to 'name' again when we have those available
      const name = rowData[rowNum][this.getColumnId('email')];
      this.names.push(name);

      let cols = {};
      for (let colNum = 0; colNum < this.columnNames.length; colNum++) {
        let colName = this.getColumnName(colNum);
        if (colName !== 'timestamp') {
          cols[colName] = rowData[rowNum][colNum];
        }
      }
      rows.push(cols);
      this.data[name] = cols;
    }

    // Now that the name list and data are done,
    // let's build the questions
    for (let rowNum = 0; rowNum < rows.length; rowNum++) {
      // Build questions for 'fun title'
      if (rows[rowNum].fun_title) {
        this.questions.push({
          category: 'fun_title',
          text: rows[rowNum].fun_title,
          options: this.getNameOptions(5, rows[rowNum].name),
          // name: rows[rowNum].name,
          // TODO: Change to name
          name: rows[rowNum].email,
          chosen: null,
        });
      }

      // Build questions for 'fun fact'
      if (rows[rowNum].fact) {
        this.questions.push({
          category: 'fact',
          text: rows[rowNum].fact,
          options: this.getNameOptions(5, rows[rowNum].name),
          // name: rows[rowNum].name,
          // TODO: Change to name
          name: rows[rowNum].email,
          chosen: null,
        });
      }
    }
  }

  getQuestions() {
    return this.questions;
  }

  getColumnId(colName) {
    return this.columnNames.indexOf(colName);
  }
  getColumnName(colId) {
    return this.columnNames[colId];
  }
  getNameOptions(howMany = 6, includedName = '') {
    const names = Tools.shuffle(this.names);
    let result = names.slice(0, howMany - 1);

    if (includedName && result.indexOf(includedName) === -1) {
      // Add the required name
      result.push(includedName);
    } else {
      // Add the next name on the list
      result.push(names[howMany]);
    }
    return result;
  }
}

export default SpreadsheetData;
