'use strict'

const PessoaRepository = use('App/Repositories/PessoaRepository')

class PessoaService {
  constructor() {
    this._repository = new PessoaRepository()
  }
  
  async listAll() {
    const pessoas = await this._repository.listAll()
    
    return pessoas    
  }

  async show(id) {
    if(id) {
      const pessoa = await this._repository.show(id)

      return pessoa
    }

    return undefined
  }

  async create(data) {
    if(data) {
      const pessoa = await this._repository.create(data)

      return pessoa
    }

    return undefined
  }

  async update(id, data) {
    if(id && data) {
      const pessoa = await this._repository.update(id, data)

      return pessoa
    }

    return undefined
  }

  async destroy(id) {
    if(id) {
      await this._repository.destroy(id)

      return true
    }

    return undefined
  }
}

module.exports = PessoaService