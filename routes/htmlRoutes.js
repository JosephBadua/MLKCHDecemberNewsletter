module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("february");
    });
    app.get("/marchWIP", function(req, res) {
        res.render("march");
    });
    app.get("/january", function(req, res) {
        res.render("january");
    });
    app.get("/december", function(req, res) {
        res.render("index");
    });
};
  