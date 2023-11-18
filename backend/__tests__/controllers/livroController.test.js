import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Livro from '../../src/models/Livro.js';
import LivroController from '../../src/controllers/livroController.js';

dotenv.config();

describe('LivroController', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    // Desconectar do banco de dados após a execução dos testes
    await mongoose.connection.close();
  });

  it('Deve listar todos os livros com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    await Livro.create({
      titulo: 'Livro de Teste',
      editora: 'Editora de Teste',
      paginas: 200,
    });

    await LivroController.listarLivros({}, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          titulo: 'Livro de Teste',
          editora: 'Editora de Teste',
          paginas: 200,
        }),
      ])
    );
  });

  it('Deve listar um livro por ID com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    const livroCriado = await Livro.create({
      titulo: 'Livro de Teste 2',
      editora: 'Editora de Teste',
      paginas: 250,
    });

    const req = { params: { id: livroCriado._id } };

    await LivroController.listarLivroPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        titulo: 'Livro de Teste 2',
        editora: 'Editora de Teste',
        paginas: 250,
      })
    );
  });

  // ... Outros testes para os métodos restantes do LivroController
});
