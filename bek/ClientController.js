'use strict'

const ClientService = require('./ClientService')

class ClientsControler{
    // создать клиента
    async create(req, res) {
        try {
            await ClientService.create(req.body)
            res.status(200).json('Клиент создан')
            // логирование
            console.log(`client create`)
            console.log(req.body)
            console.log('')
        } catch (error) {
            res.status(500).json('Пожалуйста заполните все поля')
            console.log(error)
        }
    }
    // получить всех клиентов
    async getAll(req, res) {
        try {
            const clients = await ClientService.getAll()
            res.status(200).json(clients)
            // логирование
            console.log('get all clients')
            console.log(clients)
            console.log('clients: ' + clients.length)
            console.log('')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
    // получить определёного клиента
    async get(req, res) {
        try {
            const client = await ClientService.get(req.params.id)
            res.status(200).json(client)
            // логирование
            console.log(`get client ${req.params.id}`)
            console.log('')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
    // обновить клиента
    async update(req, res) {
        try {
            const update = await ClientService.update(req.params.id, req.body)
            res.status(200).json(update)
            // логирование
            console.log(`client ${req.params.id} update to `)
            console.log(update)
            console.log('')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
    // удалить клиента
    async delete(req, res) {
        try {
            await ClientService.delete(req.params.id)
            res.json('client deleted')
            // логирование
            console.log(`client ${req.params.id} delete`)
            console.log('')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
}

module.exports = new ClientsControler()