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
    body("name").notEmpty().withMessage("Name जरूरी है"),
    body("email").isEmail().withMessage("सही Email डालें"),
    body("password").isLength({ min: 6 }).withMessage("Password कम से कम 6 Character होना चाहिए"),
  ],
  validate,
  registerUser
);

// Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("सही Email डालें"),
    body("password").notEmpty().withMessage("Password जरूरी है"),
  ],
  validate,
  loginUser
);

// Verify
router.get("/verify", authMiddleware, verifyUser);

module.exports = router;
