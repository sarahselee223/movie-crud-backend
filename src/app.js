const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = process.env.PORT||5000

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.disable('x-powered-by')

app.use('/movies', require('./routes/movies_route.js'))

app.use((err, req, res, next) => {
    const errorMessage = {}
    console.log(err);
    
    if(process.env.NODE_ENV !== 'production' && err.stack)
        errorMessage.stack = err.stack

    errorMessage.status = err.status || 500
    errorMessage.message = err.message || 'Internal Server Error'
    // errorMessage.errors = err.errors || ''
    res.status(errorMessage.status).send(errorMessage)
})
  
app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Route not found' }})
})


app.listen(port, () => {
    console.log(`Library API listening on port ${port}!`)
})

module.exports = app