function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getRows() {
  return AppLib.spreadsheet.getRows();
}
