var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

// define schema ======================
var userSchema = mongoose.Schema({
    local: {
        UUID        : String,
        password    : String
    }
})

// methods ============================

// hashing
userSchema.methods.generateHash = (password) => {
    bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// check valid password
userSchema.methods.validPassword = (password) => {
    bcrypt.compareSync(password, this.local.password)
}

// create model
module.exports = mongoose.model('User', userSchema)