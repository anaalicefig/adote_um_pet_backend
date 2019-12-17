'use strict'

const AbstractRepository = use('App/Repositories/AbstractRepository')
const Ong = use('App/Models/Ong')

class OngRepository extends AbstractRepository {
  constructor() {
    super(Ong)
  }
}

module.exports = OngRepository