const express = require('express')
const mysql2 = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'wallet'
}

// middlewares -------------------------------------------
app.use(myconn(mysql2, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes ------------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

// server running ----------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'))
})