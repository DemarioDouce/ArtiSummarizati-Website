module.exports = function (app) {
  var nlp = require("../controllers/nlp.server.controller");

  app.route("/").get(nlp.renderURLForm);

  app
    .route("/processNLP")
    .get(nlp.scrapeURL, nlp.processText, nlp.renderResult);

  app.route("/processNLP").post(nlp.getRequest);

  app.route("/api/run").get(nlp.run, nlp.processText, nlp.renderResultJson);
  app.route("/api/run").post(nlp.run, nlp.processText, nlp.renderResultJson);
};
