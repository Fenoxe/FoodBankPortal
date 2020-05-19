var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

// define schema ======================
var userSchema = mongoose.Schema({
    local: {
        username    : {
            type: String,
            required: true,
            index: { unique: true }
        },
        password    : {
            type: String,
            required: true
        },
        signupdate  : {
            type: Date,
            required: true
        }
    }
})

// methods ============================

// hashing
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// check valid password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
}

// create model
module.exports = mongoose.model('User', userSchema)