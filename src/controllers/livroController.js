import { autor } from '../models/Autor.js'
import livro from '../models/Livro.js'

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({})

      res.status(200).json(listaLivros)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id
      const livroEncontrado = await livro.findById(id)

      res.status(200).json(livroEncontrado)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` })
    }
  }

  static async cadastrarLivros(req, res) {
    const novoLivro = req.body

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }

      const livroCriado = await livro.create(livroCompleto)

      res.status(201).json({
        message: 'Cadastrado com sucesso',
        livro: livroCriado,
      })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndUpdate(id, req.body)

      res.status(200).json({ message: 'Livro atualizado' })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do livro` })
    }
  }

  static async removerLivroPorId(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndRemove(id)

      res.status(200).json({ message: 'Livro removido com sucesso' })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na remoção do livro` })
    }
  }
}

export default LivroController
