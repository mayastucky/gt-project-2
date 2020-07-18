const db = require("../models");

module.exports = function(app) {

//Get route to display member info
//Not sure about the :id? do we need req.params
//dashboard or login for path?
app.get("/api/dashboard/:id", function(req, res) {
    db.Educator.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbEducator) {
        res.json(dbEducator);
      });
  });

//Create Route for new Member

//Update Route for Updated Member

//Delete Route for Delete Member

};
