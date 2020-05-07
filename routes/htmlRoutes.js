module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("may");
    });
    app.get("/april", function(req, res) {
        res.render("april");
    });
    app.get("/march", function(req, res) {
        res.render("march");
    });
    app.get("/february", function(req, res) {
        res.render("february");
    });
    app.get("/january", function(req, res) {
        res.render("january");
    });
    app.get("/december", function(req, res) {
        res.render("index");
    });
};
  