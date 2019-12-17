'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddEnderecoIdToPessoaSchema extends Schema {
  up () {
    this.table('add_endereco_id_to_pessoas', (table) => {
      // alter table
    })
  }

  down () {
    this.table('add_endereco_id_to_pessoas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddEnderecoIdToPessoaSchema
