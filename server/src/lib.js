import SpreadsheetData from './classes/SpreadsheetData';
// Instantiate a SpreadsheetData object and export it.
// This is the connection between the Google App Script "backend"
// That communicates with the spreadsheet, and the "frontend"
// of the VueJS components
const spreadsheet = new SpreadsheetData();
export { spreadsheet };
