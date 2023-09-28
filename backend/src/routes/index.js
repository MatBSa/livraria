import express from 'express'
import cors from 'cors'
import livros from './livrosRoutes.js'
import autores from './autoresRoutes.js'

const routes = (app) => {
  app.use(cors())

  app.route('/').get((req, res) => res.status(200).send('Bem vindo a livraria'))

  app.use(express.json(), livros, autores)
}

export default routes
