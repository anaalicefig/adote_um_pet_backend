'use strict'

const Usuario = use('App/Controllers/Http/UsuarioController')

class UsuarioController {
  constructor() {
    this._controller = new Usuario()
  }

  async adicionarUsuario(parent, args, ctx) {
    const response = await this._controller.create(args)

    return response
  }

  async deletarUsuario(parent, { id }, ctx) {
    const response = await this._controller.destroy(id)

    return response
  }  
}

module.exports = UsuarioController