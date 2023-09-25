import { autor } from '../models/Autor.js'

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await livro.find({})

      res.status(200).json(listaAutores)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id
      const autorEncontrado = await livro.findById(id)

      res.status(200).json(autorEncontrado)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` })
    }
  }

  static async cadastrarAutores(req, res) {
    try {
      const novoAutor = await autor.create(req.body)

      res.status(201).json({
        message: 'Cadastrado com sucesso',
        livro: novoAutor,
      })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndUpdate(id, req.body)

      res.status(200).json({ message: 'Autor atualizado' })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do autor` })
    }
  }

  static async removerAutorPorId(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndRemove(id)

      res.status(200).json({ message: 'Autor removido com sucesso' })
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na remoção do autor` })
    }
  }
}

export default AutorController
