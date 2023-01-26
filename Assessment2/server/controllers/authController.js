const creds = {
  seller: 'ilovejavascript',
  buyer: 'ilovetypescript'
};

module.exports = {
  setCookie: (req, res, next) => {
    try {
      const { user, pass } = req.body;
      // check creds
      if (creds[user] === pass) {
        // set token in cookie
        res.cookie('token', user);
        return next();
      } else {
        return res.send('unsuccessful login attempt');
      }
    } catch(err) {
      return next(err);
    }
  },
  verifyCookie: (req, res, next) => {
    try {
      // check for token in cookies
      const { token } = req.cookies;
      if (token) return next();
      // if check fails send message
      return res.send('You must be signed in to view this page');
    } catch(err) {
      return next(err);
    }
  },
  authorizeRole: (req, res, next) => {
    try {
      // check cookie for role
      const { token } = req.cookies;
      // save role for auth
      res.locals.role = token;
      return next();
    } catch(err) {
      return next(err);
    }
  }
};
