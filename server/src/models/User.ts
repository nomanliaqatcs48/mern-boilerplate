const mngse = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = mngse.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next: any) {
  // @ts-ignore
  var user = this;

  if (user.isModified("password")) {
    // console.log('password changed')
    bcrypt.genSalt(saltRounds, function (err: Error, salt: any) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err: Error, hash: any) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword: any, cb: any) {
  bcrypt.compare(
    plainPassword,
    this.password,
    function (err: Error, isMatch: any) {
      if (err) return cb(err);
      cb(null, isMatch);
    }
  );
};

userSchema.methods.generateToken = function (cb: any) {
  var user = this;
  console.log("user", user);
  console.log("userSchema", userSchema);
  var token = jwt.sign(user._id.toHexString(), "secret");
  var oneHour = moment().add(1, "hour").valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err: Error, user: any) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token: any, cb: any) {
  var user = this;

  jwt.verify(token, "secret", function (err: Error, decode: any) {
    user.findOne(
      { _id: decode, token: token },
      function (err: Error, user: any) {
        if (err) return cb(err);
        cb(null, user);
      }
    );
  });
};
// @ts-ignore
const User = mngse.model("User", userSchema);

module.exports = { User };
