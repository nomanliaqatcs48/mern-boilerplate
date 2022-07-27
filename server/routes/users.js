const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

//=================================
//             User
//=================================

router.get("/auth", (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post("/register", (req, res) => {
  res.send(200);
});

router.post("/login", (req, res) => {
  res.send(200);
});

router.get("/logout", (req, res) => {
  res.send(200);
});

module.exports = router;
