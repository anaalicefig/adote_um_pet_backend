'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddOngIdPessoaIdColumnsToUsuarioSchema extends Schema {
  up () {
    this.table('usuario', (table) => {
      table.integer('pessoa_id').references('id').inTable('pessoa').unique()
      table.integer('ong_id').references('id').inTable('ong').unique()
    })
  }

  down () {
    this.table('usuario', (table) => {
      table.dropColumn('pessoa_id')
      table.dropColumn('ong_id')
    })
  }
}

module.exports = AddOngIdPessoaIdColumnsToUsuarioSchema
