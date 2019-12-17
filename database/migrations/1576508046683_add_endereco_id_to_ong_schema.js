'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddEnderecoIdToOngSchema extends Schema {
  up () {
    this.table('ong', (table) => {
      table.integer('endereco_id').references('id').inTable('endereco')
    })
  }

  down () {
    this.table('ong', (table) => {
      table.dropColumn('endereco_id')
    })
  }
}

module.exports = AddEnderecoIdToOngSchema
