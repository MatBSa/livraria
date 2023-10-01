import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default {
  getBooks() {
    return apiClient.get('/livros')
  },
  getBook(id) {
    return apiClient.get(`/livros/buscar/${id}`)
  },
  postBook(book) {
    return apiClient.post('/livros/cadastrar', book)
  },
  postAuthor(author) {
    return apiClient.post('/autores/cadastrar', author)
  },
  putBook(id, book) {
    return apiClient.put(`/livros/atualizar/${id}`, book)
  },
  deleteBook(id) {
    return apiClient.delete(`/livros/remover/${id}`)
  },
  getAuthors() {
    return apiClient.get('/autores')
  },
}
