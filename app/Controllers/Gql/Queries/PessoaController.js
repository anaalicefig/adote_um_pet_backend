'use strict'

const Pessoa = use('App/Controllers/Http/PessoaController')

class PessoaController {
  constructor() {
    this._controller = new Pessoa()
  }

  async pessoas() {
    const pessoas = await this._controller.listAll()

    return pessoas.toJSON()
  }

  async pessoa(parent, { id }, ctx) {
    const pessoa = await this._controller.show(id)

    return pessoa
  }  
}

module.exports = PessoaController