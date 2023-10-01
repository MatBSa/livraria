import AutorController from '../../controllers/autorController.js'

describe('AutorController', () => {
  describe('listarAutores', () => {
    it('should return a list of authors', async () => {
      // Simule a função de listarAutores e verifique a saída
      const autores = await AutorController.listarAutores()
      expect(autores).toEqual([
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

  // Implemente testes para outras funções do AutorController
})
