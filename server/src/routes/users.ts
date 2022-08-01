// @ts-ignore
const express = require('express');

const router = express.Router();
// @ts-ignore
const { User } = require('../models/User');
// @ts-ignore
const { auth } = require('../middleware/auth');

//= ================================
//             User
//= ================================

router.get('/auth', auth, (req: any, res: any) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role !== 0,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post('/register', (req: any, res: any) => {
  const user = new User(req.body);

  user.save((err: Error, doc: any) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post('/login', (req: any, res: any) => {
  User.findOne({ email: req.body.email }, (err: Error, user: any) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });
    }

    user.comparePassword(req.body.password, (err: Error, isMatch: any) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: 'Wrong password' });
      }
      user.generateToken((err: Error, user: any) => {
        if (err) return res.status(400).send(err);
        res.cookie('w_authExp', user.tokenExp);
        res.cookie('w_auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get('/logout', auth, (req: any, res: any) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', tokenExp: '' },
    (err: Error, doc: any) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

module.exports = router;
