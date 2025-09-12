const express = require("express");
const { registerUser, loginUser, verifyUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Input validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Register
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name"),
    body("email").isEmail().withMessage("Email"),
    body("password").isLength({ min: 6 }).withMessage("Password "),
  ],
  validate,
  registerUser
);

// Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email "),
    body("password").notEmpty().withMessage("Password "),
  ],
  validate,
  loginUser
);

// Verify
router.get("/verify", authMiddleware, verifyUser);

module.exports = router;

