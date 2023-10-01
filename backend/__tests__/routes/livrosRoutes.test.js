import request from 'supertest'
import app from '../../app.js'

describe('livrosRoutes', () => {
  describe('GET /livros', () => {
    it('should return a list of books', async () => {
      const response = await request(app).get('/livros')
      expect(response.status).toBe(200)
      expect(response.body).toEqual([
        {
          _id: '650f33affa7b9a0fe63b0ada',
          titulo: 'Sonho Grande',
          editora: 'Primeira Pessoa',
          preco: 37.99,
          paginas: 200,
        },
        // Adicione outros livros conforme necessário
      ])
    })
  })

  // Implemente testes para outras rotas de livros
})
