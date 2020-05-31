// set up ====================================================
const express    = require('express')
const cors       = require('cors')
const mongoose   = require('mongoose')
const passport   = require('passport')
const flash      = require('connect-flash')

const morgan       = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const session      = require('express-session')

const configDB = require('./config/database.js')

const app = express()
const port = process.env.PORT || 8080


// connect to db ==============================================
mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongodb connection established successfully')
})

app.use(passport.initialize())
// config express app ========================================
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())


// config passport
require('./config/passport')(passport)

app.use(session({ secret: 'verygoodsecretsaregood2000' }))
app.use(passport.session())
app.use(flash())


// routing ===================================================
require('./app/routes.js')(app, passport)

// launch ====================================================
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})