'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddEnderecoIdToOngSchema extends Schema {
  up () {
    this.table('add_endereco_id_to_ongs', (table) => {
      // alter table
    })
  }

  down () {
    this.table('add_endereco_id_to_ongs', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddEnderecoIdToOngSchema
