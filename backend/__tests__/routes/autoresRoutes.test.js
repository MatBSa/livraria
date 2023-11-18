import express from 'express';
import request from 'supertest';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from '../../src/routes/index.js';
import { autor as Autor } from '../../src/models/Autor.js';

dotenv.config();

const app = express();
app.use(express.json());
routes(app);

describe('Autores Routes', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Deve listar todos os autores', async () => {
    await Autor.create({
      nome: 'Autor de Teste',
      nacionalidade: 'Testelandia',
    });

    const response = await request(app).get('/autores');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve cadastrar um novo autor', async () => {
    const novoAutor = {
      nome: 'Novo Autor',
      nacionalidade: 'Testelandia',
    };

    const response = await request(app)
      .post('/autores/cadastrar')
      .send(novoAutor);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Cadastrado com sucesso');
    expect(response.body.livro.nome).toBe('Novo Autor');
  });

  it('Deve atualizar um autor com sucesso', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 3',
      nacionalidade: 'Testelandia',
    });

    const novoNome = 'Autor Atualizado';

    const response = await request(app)
      .put(`/autores/atualizar/${autorCriado._id}`)
      .send({ nome: novoNome });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Autor atualizado');
  });

  it('Deve remover um autor com sucesso', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor de Teste 4',
      nacionalidade: 'Testelandia',
    });

    const response = await request(app)
      .delete(`/autores/remover/${autorCriado._id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Autor removido com sucesso');
  });
});
