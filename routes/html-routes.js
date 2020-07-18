// We need a app.get to the path /handlebars

// Get route to render the login page
module.exports = function (app) {
  app.get("/login", function (req, res) {
    res.render("login");
  });
};

