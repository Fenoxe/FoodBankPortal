module.exports = (app, passport) => {

    // welcome page
    app.get('/', (req, res) => {
        res.json('home')
    })

    // login page
    app.get('/login', (req, res) => {
        // res.render('login.ejs', { message: req.flash('loginMessage') })
        res.json('get login')
    })

    // process login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash    : true
    }))

    // signup page
    app.get('/signup', (req, res) => {
        // res.render('signup.ejs', { message: req.flash('signupMessage') });
        res.json('get signup')
    })

    // process signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup',
        failureFlash    : true
    }))

    // profile
    app.get('/profile', isLoggedIn, (req, res) => {
        // res.render('profile.ejs', {
        //     user : req.user
        // })
        res.json('get profile')
    })

    // logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
}

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next()

    // if they aren't redirect them to the home page
    res.redirect('/')
}