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
    await mongoose.connect('mongodbURL')
    app.listen(PORT, () => console.log(`hello, port ${PORT} \n`))
}

startApp()
