'use strict'

const Client = require('./Client')

class ClientService{
    // создать клиента
    async create(client) {
        return await Client.create(client)
    }
    // получить всех клиентов
    async getAll() {
        return await Client.find()
    }
    // получить определёного клиента    
    async get(id) {
        return await Client.findById(id)
    }
    // обновить клиента
    async update(id, body) {
        return await Client.findByIdAndUpdate(id, body, {new: true,})
    }
    // удалить клиента
    async delete(id) {
        return await Client.findByIdAndDelete(id)
    }
}

module.exports = new ClientService()