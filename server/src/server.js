const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const { RSA_NO_PADDING } = require('constants')

const app = express()


//DDBB connection
// mongoose.connect('mongodb://localhost/prueba-mevn', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(db => console.log("DB is connected"))
// .catch(err => console.log("Something goes wrong with the connection: " + err.message))

//settings
app.set('port', process.env.PORT || 8081)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/', (req, res) =>{
    res.send("Pagina principal")
})
// app.use(require('./routes/routes'))


//Server running
app.listen(app.get('port'), (req,res) => {
    console.log(`Server running on port ${app.get('port')}`)
})