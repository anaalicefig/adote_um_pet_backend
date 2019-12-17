'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Gql = use('Gql')

Route.post('/', ctx => Gql.handle(ctx))

Route.get('/graphiql', ctx => Gql.handleUi(ctx))
