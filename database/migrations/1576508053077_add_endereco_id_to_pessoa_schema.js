'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddEnderecoIdToPessoaSchema extends Schema {
  up () {
    this.table('pessoa', (table) => {
      table.integer('endereco_id').references('id').inTable('endereco')
    })
  }

  down () {
    this.table('pessoa', (table) => {
      table.dropColumn('endereco_id')
    })
  }
}

module.exports = AddEnderecoIdToPessoaSchema
