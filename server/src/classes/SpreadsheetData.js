'use strict';

class SpreadsheetData {
  constructor() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const lastRow = spreadsheet.getLastRow();
    const lastColumn = spreadsheet.getLastColumn();
    // TODO: This should probably be configurable too
    // Skip first column (timestamp) and first row (headings)
    const rangeObject = sheet.getRange('B2:' + lastRow + lastColumn);

    this.names = [];
    this.rows = rangeObject.getValues().filter(r => {
      return !!r[0].length; // Only return if first cell (email) has value
    });
    // Filter empties; unfortunately, it looks like 'last row' is way below
    // what it should be
  }

  getRows() {
    return this.rows;
  }
}

export default SpreadsheetData;
