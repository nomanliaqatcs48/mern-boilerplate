// @ts-ignore
const { User } = require('../models/User');
// @ts-ignore
const auth = (req, res, next) => {
  const token = req.cookies.w_auth;
  // @ts-ignore
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ isAuth: false, error: true });
    }
    req.token = token;
    req.user = user;
    next();
  });
};
module.exports = { auth };
