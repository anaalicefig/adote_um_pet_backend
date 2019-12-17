'use strict'

const UsuarioRepository = use('App/Repositories/UsuarioRepository')

class UsuarioService {
  constructor() {
    this._repository = new UsuarioRepository()    
  }

  async listAll() {
    const usuarios = await this._repository.listAll()

    return usuarios
  }

  async show(id) {
    if(id) {
      const usuario = await this._repository.show(id)

      return usuario
    }

    return undefined  
  }

  async create(data) {
    if(data) {
      const usuario = await this._repository.create(data)

      return usuario
    }

    return undefined
  }

  async update(id, data) {
    if(id && data) {
      const usuario = await this._repository.update(id, data)

      return usuario
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

module.exports = UsuarioService