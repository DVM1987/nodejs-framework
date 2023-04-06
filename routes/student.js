var Student = require("../models/Student");
module.exports = function (app, obj) {
  app.get("/", function (req, res) {
    var teo = new Student({
      name: "Teo Nguyen",
      sex: true,
      username: "teovn",
      password: "123456",
      createRegister: Date.now(),
      age: 20,
    });
    res.json({ data: teo });
  });
};
