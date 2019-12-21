const Model = require("../models");

const parseCookies = (req, res, next) => {
  //var parsed = req.headers.cookie.join(";");
  // req.cookies = parsed;
  //console.log("---->   ", req.header);
  if (req.headers.cookie) {
    console.log("req.headers ===>", req.headers.cookie.split("; "));
  }
};

module.exports = parseCookies;
