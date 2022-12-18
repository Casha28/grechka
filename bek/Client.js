'use strict'

const mongoose = require('mongoose')

const Client = new mongoose.Schema({
    username: {type: String, required: true},
    surname: {type: String, required: true},
    patronymic: {type: String, required: true},
    birthDay: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    pasportSeries: {type: String, required: true},
    pasportNumber: {type: String, required: true}, 
    adress: {type: String, required: true}, 
    email: {type: String, required: false}  
})

module.exports = mongoose.model('Client', Client)