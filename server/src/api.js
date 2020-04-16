/**
 * The base required method for the entrypoint of Google App Script
 */
function doGet() {
  var output = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
}

function getRows() {
  // AppLib is the alias of the export of server/src/lib.js
  // This is the method that is called, from the "client" code
  // by calling this.script.getRows(), requiring the app to
  // run in Google App Script environment and have access to
  // the spreadsheet.
  return AppLib.spreadsheet.getRows();
}
