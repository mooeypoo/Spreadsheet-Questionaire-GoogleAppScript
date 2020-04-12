'use strict';

/**
 * Responsible for the direct connection to the Google Spreadsheet
 * Retrieves raw data of the rows for processing.
 */
class SpreadsheetData {
  constructor() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const lastRow = spreadsheet.getLastRow();
    const lastColumn = spreadsheet.getLastColumn();
    // TODO: This should probably be configurable too
    // Skip first column (timestamp) and first row (headings)
    const rangeObject = sheet.getRange('B2:' + lastRow + lastColumn);

    // Filter empties; unfortunately, it looks like 'last row' is way below
    // what it should be
    this.rows = rangeObject.getValues().filter(r => {
      return !!r[0].length; // Only return if first cell (email) has value
    });
  }

  /**
   * Return the row array
   *
   * @returns Array An array of rows, each an array of columns, in order.
   */
  getRows() {
    return this.rows;
  }
}

export default SpreadsheetData;
