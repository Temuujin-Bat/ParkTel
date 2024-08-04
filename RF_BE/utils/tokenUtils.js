const jwt = require("jsonwebtoken");

const createJWT = ({ userID, firstName }) => {
  const token = jwt.sign({ userID, firstName }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
};

module.exports = { createJWT, verifyJWT };
