var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
      console.log("Inside burgers!!");
        orm.selectAll("burgers", function(res) {
          console.log("We have the things in model", res);

          cb(res);
        }); 
      },
      create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
}







module.exports = burgers;