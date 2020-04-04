function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getQuestions() {
  return AppLib.spreadsheet.getQuestions();
}
