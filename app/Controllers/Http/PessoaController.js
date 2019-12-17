'use strict'

const PessoaService = use('App/Services/PessoaService')

class PessoaController {
  constructor() {
    this._service = new PessoaService()
  }

  async listAll() {
    const pessoas = await this._service.listAll()
    
    return pessoas
  }

  async show(id) {
    const pessoa = await this._service.show(id)

    return pessoa
  }

  async create(data) {
    const pessoa = await this._service.create(data)

    return pessoa
  }

  async update(id, data) {
    const pessoa = await this._service.update(id, data)

    return pessoa
  }

  async destroy(id) {
    const response = await this._service.destroy(id)

    return response      
  }
}

module.exports = PessoaController
