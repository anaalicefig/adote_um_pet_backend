'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateOngSchema extends Schema {
  up () {
    this.create('ong', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.boolean('ativo').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('ong')
  }
}

module.exports = CreateOngSchema
