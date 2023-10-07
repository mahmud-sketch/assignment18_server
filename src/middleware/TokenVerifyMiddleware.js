module.exports = (req, res, next) => {
  let token = req.headers["token-key"];
  jwt.verify(token, "secretKey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "invalid token", data: err });
    } else {
      res.status(200).json({ status: "valid token", data: decoded });
    }
  });
};
