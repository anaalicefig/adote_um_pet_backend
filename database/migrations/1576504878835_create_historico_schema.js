'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateHistoricoSchema extends Schema {
  up () {
    this.create('historico', (table) => {
      table.increments()
      table.text('descricao').notNullable()
      table.integer('animal_id').notNullable().references('id')
        .inTable('animal').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('historico')
  }
}

module.exports = CreateHistoricoSchema
