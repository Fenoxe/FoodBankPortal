const LocalStrategy = require('passport-local').Strategy

// load user mode
const User = require('../app/models/user')

module.exports = function(passport) {

    // passport session setup
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

    // main local signup
    passport.use('local-signup', new LocalStrategy({

        usernameField       : 'username',
        passwordField       : 'password',
        passReqToCallback   : true

    }, (req, username, password, done) => {
        
        process.nextTick(() => {

            User.findOne({'local.username' : username }, (err, user) => {

                if (err) return done(err)

                if (user) return done(null, false, req.flash('signupMessage', 'That username is already taken.'))

                const newUser = new User()

                newUser.local.username = username
                newUser.local.password = newUser.generateHash(password)

                newUser.save((err) => {
                    
                    if (err) throw err

                    return done(null, newUser)

                })
            })
        })
    }))

    passport.use('local-login', new LocalStrategy({

        usernameField       : 'username',
        passwordField       : 'password',
        passReqToCallback   : 'true'
    }, (req, username, password, done) => {

        User.findOne({'local.username' : username}, (err, user) => {

            if (err) return done(err)

            if (!user) return done(null, false, req.flash('loginMessage', 'No user found.'))

            if (!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Incorrect Password.'))

            return done(null, user)
        })

    }))
}