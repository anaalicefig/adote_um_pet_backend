'use strict'

const UsuarioService = use('App/Services/UsuarioService')

class UsuarioController {
  constructor() {
    this._service = new UsuarioService()
  }

  async listAll() {
    const usuarios = await this._service.listAll()
    
    return usuarios
  }

  async show(id) {
    const usuario = await this._service.show(id)

    return usuario
  }

  async update(id, data) {
    const usuario = await this._service.update(id, data)

    return usuario
  }

  async destroy(id) {
    const response = await this._service.destroy(id)

    return response      
  }
}

module.exports = UsuarioController
