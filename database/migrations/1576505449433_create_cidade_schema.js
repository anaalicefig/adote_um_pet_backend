'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CidadeSchema extends Schema {
  up () {
    this.create('cidade', (table) => {
      table
        .integer('id').primary()
      table.string('nome', 100).notNullable()
      table.integer('estado_id').notNullable()
        .references('id').inTable('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('cidade')
  }
}

module.exports = CidadeSchema
