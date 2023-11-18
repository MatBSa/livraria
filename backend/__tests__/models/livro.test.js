import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { autor as Autor } from '../../src/models/Autor.js';
import Livro from '../../src/models/Livro.js';

dotenv.config();

describe('Livro Model', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Deve criar um livro com sucesso', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor do Livro',
      nacionalidade: 'Testelandia',
    });

    const novoLivro = await Livro.create({
      titulo: 'Livro de Teste',
      editora: 'Editora de Teste',
      paginas: 200,
    });

    expect(novoLivro.titulo).toBe('Livro de Teste');
    expect(novoLivro.editora).toBe('Editora de Teste');
    expect(novoLivro.paginas).toBe(200);
  });

  it('Deve buscar um livro por ID com sucesso', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor do Livro 2',
      nacionalidade: 'Testelandia',
    });

    const livroCriado = await Livro.create({
      titulo: 'Livro de Teste 2',
      editora: 'Editora de Teste',
      paginas: 250,
    });

    const livroEncontrado = await Livro.findById(livroCriado._id);

    expect(livroEncontrado.titulo).toBe('Livro de Teste 2');
    expect(livroEncontrado.editora).toBe('Editora de Teste');
    expect(livroEncontrado.paginas).toBe(250);
  });
});
