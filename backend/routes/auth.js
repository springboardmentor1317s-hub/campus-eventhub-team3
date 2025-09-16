
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
  const {
    fullName,
    email,
    password,
    contactNumber,
    collegeOrUniversity,
    studentId,
    role,
  } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      fullName,
      email,
      password, // You should hash the password before saving it to the database
      contactNumber,
      collegeOrUniversity,
      studentId,
      role,
    });

    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
