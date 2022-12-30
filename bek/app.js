'use strict'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')


const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use('/api', router)

const startApp = async() => {
    await mongoose.connect('mongodb+srv://casha:casha@cluster0.cdaqhrb.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => console.log(`hello, port ${PORT} \n`))
}

startApp()