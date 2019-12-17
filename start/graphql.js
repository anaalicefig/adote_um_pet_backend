'use strict'

const Gql = use('Gql')

Gql.schema('Usuario', () => {
  Gql.query('Queries/UsuarioController')
  Gql.mutation('Mutations/UsuarioController')
})

Gql.schema('Pessoa', () => {
  Gql.query('Queries/PessoaController')
  Gql.mutation('Mutations/PessoaController')
})