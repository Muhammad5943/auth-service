const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { users } = require('../data')
const projectRouter = require('../routes/projects')
// const session = require('express-session')
const config = require('../config/config.json')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

/* is that had correct function */
/* app.use(session({
    name: 'sessionId',
    secret: 'mysqcretkeywillnottellyou',
    saveUninitialized: false,
    resave:false,
    cookie: {
        secure: false,
        httpOnly: false,
        expires: new Date(Date.now() + 60 + 60 + 1000) // 1 hour
    }
})) */

require('./passport')

require('../router/routes')(app)

app.listen(process.env.PORT || config.port,
    console.log(`Listening on http://localhost:${config.port}`)    
);