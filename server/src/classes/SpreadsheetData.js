'use strict';

class SpreadsheetData {
  constructor() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const lastRow = spreadsheet.getLastRow();
    const lastColumn = spreadsheet.getLastColumn();
    // TODO: This should probably be configurable too
    const rangeObject = sheet.getRange('B1:' + lastRow + lastColumn);

    this.names = [];
    this.rows = rangeObject.getValues();
  }

  getRows() {
    return this.rows;
  }
}

export default SpreadsheetData;
