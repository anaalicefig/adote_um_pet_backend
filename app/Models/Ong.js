'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ong extends Model {

  static get table() {
    return 'ong'
  }
}

module.exports = Ong
