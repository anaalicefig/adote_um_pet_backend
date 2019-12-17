'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAnimalSchema extends Schema {
  up () {
    this.create('animal', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('raca').notNullable()
      table.string('porte').notNullable()
      table.string('cor')
      table.integer('ong_id').notNullable().references('id')
        .inTable('ong').onDelete('cascade')
      table.string('situacao').defaultTo('disponivel') // adotado, disponivel_ lar_temporario
      table.timestamps()
    })
  }

  down () {
    this.drop('animal')
  }
}

module.exports = CreateAnimalSchema
