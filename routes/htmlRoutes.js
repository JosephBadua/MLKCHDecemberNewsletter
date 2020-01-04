module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("january");
    });
    app.get("/december", function(req, res) {
        res.render("index");
    });
};
  