import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

function authenticateToken(req, res, next) {
  const token = process.env.SECRET_TOKEN;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: Missing token" });
  }
  next();
}

export default authenticateToken;
