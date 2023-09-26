import express from 'express'
import LivroController from '../controllers/livroController.js'

const routes = express.Router()

routes.get('/livros', LivroController.listarLivros)

routes.get('/livros/busca_por_editora', LivroController.listaLivrosPorEditora)

routes.get('/livros/buscar/:id', LivroController.listarLivroPorId)

routes.post('/livros/cadastrar', LivroController.cadastrarLivros)

routes.put('/livros/atualizar/:id', LivroController.atualizarLivroPorId)

routes.delete('/livros/remover/:id', LivroController.removerLivroPorId)

export default routes
