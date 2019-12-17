'use strict'

const Pessoa = use('App/Controllers/Http/PessoaController')

class PessoaController {
  constructor() {
    this._controller = new Pessoa()
  }

  async adicionarPessoa(parent, arg, ctx) {
    console.log(arg)
    const pessoa = this._controller.create(arg)

    return pessoa
  }

  async deletarPessoa(parent, { id }, ctx) {
    const response = await this._controller.destroy(id)

    return response
  }  
}

module.exports = PessoaController