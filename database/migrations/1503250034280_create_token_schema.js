'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTokenSchema extends Schema {
  up () {
    this.create('token', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('usuario')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('token')
  }
}

module.exports = CreateTokenSchema
