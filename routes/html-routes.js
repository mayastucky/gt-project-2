// We need a app.get to the path /handlebars
const db = require("../models");

// Get route to render the route page
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  //  Get route to render the home page
  app.get("/login", function (req, res) {
    console.log(req.user);
    res.render("login");
  });

  // Get route to render educator information
  app.get("/dashboard/:id", function (req, res) {
    // find the data here
    //
    db.Educator.findOne({
      where: {
        id: req.params.id,
      },
    }).then((educator) => {
      // console.log("Line 20 educator",educator);
      res.render("dashboard", {
        educator,
      });
    });
  });

  // Get route to render registration page
  app.get("/register", function (req, res) {
    res.render("register");
  });
  // Get route to render update page
  app.get("/update", function (req, res) {
    res.render("update");
  });

  app.get("/search", function (req, res) {
    res.render("search", {});
  });

  // Get route to render search results
  app.get("/search/:SpecialityId", function (req, res) {
    console.log(req.params.SpecialityId);

    db.Educator.findAll({
      where: {
        SpecialityId: req.params.SpecialityId,
      },
    }).then(function (educators) {
      console.log(educators);
      res.render("search", { educators });
    });
  });
};
