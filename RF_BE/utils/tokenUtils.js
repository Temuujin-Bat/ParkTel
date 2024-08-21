const jwt = require("jsonwebtoken");

const createJWT = ({ userID, email, firstName, lastName, mobile, role }) => {
  const token = jwt.sign(
    { userID, email, firstName, lastName, mobile, role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
};

module.exports = { createJWT, verifyJWT };
