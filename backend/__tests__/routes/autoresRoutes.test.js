import request from 'supertest'
import app from '../../app.js'

describe('autoresRoutes', () => {
  describe('GET /autores', () => {
    it('should return a list of authors', async () => {
      const response = await request(app).get('/autores')
      expect(response.status).toBe(200)
      expect(response.body).toEqual([
        {
          _id: '6511f1465fe85dd6c5ca04e9',
          nome: 'Neil Gaiman',
          nacionalidade: 'estadunidense',
        },
        {
          _id: '6511fa63c6952f71faa70184',
          nome: 'Stephen Burnett',
          nacionalidade: 'estadunidense',
        },
      ])
    })
  })

  // Implemente testes para outras rotas de autores
})
