'use strict'

const OngRepository = use('App/Services/OngService')
const UsuarioService = use('App/Services/UsuarioService')

class OngService {
  constructor() {
    this._repository = new OngRepository()
  }

  async listAll() {
    const ongs = await this._repository.listAll()
    
    return ongs    
  }

  async show(id) {
    if(id) {
      const ong = await this._repository.show(id)

      return ong
    }

    return undefined
  }

  async create({ ong, usuario }) {
    if(ong && usuario) {
      const ong = await this._repository.create(data)
      await this.createUsuarioByTipo(usuario, 'ong')

      return ong
    }

    return undefined
  }

  async update(id, data) {
    if(id && data) {
      const ong = await this._repository.update(id, data)

      return ong
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

  async createUsuarioByTipo(data, tipo) {
    data.tipo = tipo

    const usuarioService = new UsuarioService()
    const usuario = usuarioService.create(data)

    return usuario
  }

}

module.exports = OngService