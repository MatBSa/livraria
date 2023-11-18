import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { autor as Autor } from '../../src/models/Autor.js';

dotenv.config();

describe('Autor Model', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Deve criar um autor com sucesso', async () => {
    const novoAutor = await Autor.create({
      nome: 'Autor de Teste',
      nacionalidade: 'Testelandia',
    });

    expect(novoAutor.nome).toBe('Autor de Teste');
    expect(novoAutor.nacionalidade).toBe('Testelandia');
  });

  it('Deve buscar um autor por ID com sucesso', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 2',
      nacionalidade: 'Testelandia',
    });

    const autorEncontrado = await Autor.findById(autorCriado._id);

    expect(autorEncontrado.nome).toBe('Autor de Teste 2');
    expect(autorEncontrado.nacionalidade).toBe('Testelandia');
  });
});
