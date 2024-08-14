const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      userID: decoded.userID,
      firstName: decoded.firstName,
    };

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
