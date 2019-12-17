'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('endereco', (table) => {
      table.increments()
      table.string('logradouro').notNullable()
      table.string('logradouro_numero').notNullable()
      table.string('bairro').notNullable()
      table.integer('cidade_id').notNullable().references('id')
        .inTable('cidade')
      table.timestamps()
    })
  }

  down () {
    this.drop('endereco')
  }
}

module.exports = EnderecoSchema
