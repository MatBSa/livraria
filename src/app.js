import express from 'express'
import conectaDatabase from './config/dbConnect.js'

const conexao = await conectaDatabase()

conexao.on('error', (erro) => {
  console.error('erro de conexão', erro)
})

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso')
})

const app = express()
app.use(express.json())

const livros = [
  {
    id: 1,
    title: 'Batendo o mercado',
  },
  {
    id: 2,
    title: '1984',
  },
]

const buscaLivro = (id) => {
  return livros.findIndex((livro) => {
    return livro.id === Number(id)
  })
}

app.get('/', (req, res) => {
  res.status(200).send('Bem vindo a livraria!')
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/buscar/:id', (req, res) => {
  const index = buscaLivro(req.params.id)

  res.status(200).json(livros[index])
})

app.get('/livros/')

app.post('/livros/cadastrar', (req, res) => {
  livros.push(req.body)

  res.status(201).send('Livro cadastrado com sucesso.')
})

app.put('/livros/atualizar/:id', (req, res) => {
  const index = buscaLivro(req.params.id)

  livros[index].title = req.body.title
  res.status(200).json(livros)
})

app.delete('/livros/remover/:id', (req, res) => {
  const index = buscaLivro(req.params.id)

  livros.splice(index, 1)

  res.status(200).send('Livro removido com sucesso')
})

export default app
