import express from 'express'
import LivroController from '../controllers/livroController.js'
import livro from '../models/Livro.js'

const routes = express.Router()

routes.get('/livros', LivroController.listarLivros)

routes.get('/livros/buscar/:id', LivroController.listarLivroPorId)

routes.post('/livros/cadastrar', LivroController.cadastrarLivros)

routes.put('/livros/atualizar/:id', LivroController.atualizarLivroPorId)

routes.delete('/livros/remover/:id', LivroController.removerLivroPorId)

export default routes
