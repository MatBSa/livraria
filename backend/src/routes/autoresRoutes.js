import express from 'express'
import AutorController from '../controllers/autorController.js'

const routes = express.Router()

routes.get('/autores', AutorController.listarAutores)

routes.get('/autores/buscar/:id', AutorController.listarAutorPorId)

routes.post('/autores/cadastrar', AutorController.cadastrarAutores)

routes.put('/autores/atualizar/:id', AutorController.atualizarAutorPorId)

routes.delete('/autores/remover/:id', AutorController.removerAutorPorId)

export default routes
