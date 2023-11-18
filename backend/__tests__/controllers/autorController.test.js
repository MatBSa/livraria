import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { autor as Autor } from '../../src/models/Autor.js';
import AutorController from '../../src/controllers/autorController.js';

dotenv.config();

describe('AutorController', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Deve listar todos os autores com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    await Autor.create({
      nome: 'Autor de Teste',
      nacionalidade: 'Testelandia',
    });

    await AutorController.listarAutores({}, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          nome: 'Autor de Teste',
          nacionalidade: 'Testelandia',
        }),
      ])
    );
  });

  it('Deve listar um autor por ID com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 2',
      nacionalidade: 'Testelandia',
    });

    const req = { params: { id: autorCriado._id } };

    await AutorController.listarAutorPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        nome: 'Autor de Teste 2',
        nacionalidade: 'Testelandia',
      })
    );
  });

  it('Deve atualizar um autor com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 3',
      nacionalidade: 'Testelandia',
    });

    const novoNome = 'Autor Atualizado';

    const req = {
      params: { id: autorCriado._id },
      body: { nome: novoNome }
    };

    await AutorController.atualizarAutorPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Autor atualizado',
      })
    );
  });

  it('Deve remover um autor com sucesso', async () => {
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 4',
      nacionalidade: 'Testelandia',
    });

    const req = { params: { id: autorCriado._id } };

    await AutorController.removerAutorPorId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Autor removido com sucesso',
      })
    );
  });
});
