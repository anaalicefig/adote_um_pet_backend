'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Adocao extends Model {

  static get table() {
    return 'adocao'
  }
}

module.exports = Adocao
