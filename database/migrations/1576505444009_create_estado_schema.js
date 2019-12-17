'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstadoSchema extends Schema {
  up () {
    this.create('estado', (table) => {
      table.integer('id').primary()      
      table.string('nome', 100).notNullable()
      table.string('abbr', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estado')
  }
}

module.exports = EstadoSchema
