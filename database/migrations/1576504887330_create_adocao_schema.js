'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateAdocaoSchema extends Schema {
  up () {
    this.create('adocao', (table) => {
      table.increments()
      table.string('situacao').defaultTo('em_andamento') //em_andamento, suspensa, cancelada, finalizada
      table.integer('pessoa_id').notNullable().references('id')
        .inTable('pessoa').onDelete('cascade')
      table.integer('animal_id').notNullable().references('id')
        .inTable('animal').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('adocao')
  }
}

module.exports = CreateAdocaoSchema
