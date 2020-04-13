function doGet() {
  var output = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
}

function getRows() {
  return AppLib.spreadsheet.getRows();
}
