'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreatePessoaSchema extends Schema {
  up () {
    this.create('pessoa', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('sexo').notNullable()
      table.string('cpf').notNullable()
      table.boolean('ativo').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoa')
  }
}

module.exports = CreatePessoaSchema
