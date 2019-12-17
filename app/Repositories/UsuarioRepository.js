'use strict'

const AbstractRepository = use('App/Repositories/AbstractRepository')
const Usuario = use('App/Models/Usuario')

class UsuarioRepository extends AbstractRepository {
  constructor() {
    super(Usuario)
  }
}

module.exports = UsuarioRepository