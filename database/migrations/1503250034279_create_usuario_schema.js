'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUsuarioSchema extends Schema {
  up () {
    this.create('usuario', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('tipo').notNullable() // admin, ong, pessoa
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario')
  }
}

module.exports = CreateUsuarioSchema
