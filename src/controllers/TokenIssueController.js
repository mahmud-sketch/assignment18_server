var jwt = require("jsonwebtoken");

exports.CreateToken = (req, res) => {
  let payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "rabbil", city: "dhaka", admin: true },
  };
  let token = jwt.sign(payload, "secretKey123");
  res.send(token);
};
