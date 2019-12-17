'use strict'

const Usuario = use('App/Controllers/Http/UsuarioController')

class UsuarioController {
  constructor() {
    this._controller = new Usuario()
  }

  async usuarios() {
    const usuarios = await this._controller.listAll()

    return usuarios.toJSON()
  }

  async usuario(parent, { id }, ctx) {
    const usuario = await this._controller.show(id)

    return usuario
  }  
}

module.exports = UsuarioController