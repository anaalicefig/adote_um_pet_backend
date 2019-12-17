'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Historico extends Model {

  static get table() {
    return 'historico'
  }
}

module.exports = Historico
