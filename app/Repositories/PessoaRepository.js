'use strict'

const AbstractRepository = use('App/Repositories/AbstractRepository')
const Pessoa = use('App/Models/Pessoa')

class PessoaRepository extends AbstractRepository {
  constructor() {
    super(Pessoa)
  }
}

module.exports = PessoaRepository