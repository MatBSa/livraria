import LivroController from '../../controllers/livroController.js'

describe('LivroController', () => {
  describe('listarLivros', () => {
    it('should return a list of books', async () => {
      // Simule a função de listarLivros e verifique a saída
      const livros = await LivroController.listarLivros()
      expect(livros).toEqual([
        {
          _id: '650f33affa7b9a0fe63b0ada',
          titulo: 'Sonho Grande',
          editora: 'Primeira Pessoa',
          preco: 37.99,
          paginas: 200,
        },
      ])
    })
  })

  // Implemente testes para outras funções do LivroController
})
