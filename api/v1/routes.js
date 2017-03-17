module.exports = function(app, passport) {
    // route for home page
 app.all('*', function (req, res, next) {

  if ('OPTIONS' === req.method) {
    res.send(200)
  }
  else {
    next()
  }
  console.log(res);
})
    app.get('/home', isLoggedIn, function(req, res) {
        
            user: req.user
        
    });
    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //facbook authentication 
        app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
        app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/home',   
            failureRedirect: '/login'
        }));
    //gmail authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/home',
            failureRedirect: '/'
        }));
};
// route middleware 
function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated())
        return next();
    res.redirect('/');

}