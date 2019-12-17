'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Animal extends Model {

  static get table() {
    return 'animal'
  }
}

module.exports = Animal
