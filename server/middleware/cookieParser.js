const Model = require("../models");

const parseCookies = (req, res, next) => {
  //var parsed = req.headers.cookie.join(";");
  // req.cookies = parsed;
  //console.log("---->   ", req.header);
  if (req.headers.cookie) {
    var arr = req.headers.cookie.split("; ");
    var objOfCookies = {};
    arr.forEach(cookie => {
      var cookieObj = cookie.split("=");
      objOfCookies[cookieObj[0]] = cookieObj[1];
    });

    console.log("req.headers ===>", objOfCookies);
    req.cookies = objOfCookies;
  }
};

module.exports = parseCookies;
