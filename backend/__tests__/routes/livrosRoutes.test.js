import express from 'express';
import request from 'supertest';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from '../../src/routes/index.js';
import { autor as Autor } from '../../src/models/Autor.js';
import Livro from '../../src/models/Livro.js';

dotenv.config();

const app = express();
app.use(express.json());
routes(app);

describe('Livros Routes', () => {
  beforeAll(async () => {
    const username = process.env.DB_USERNAME
    const password = process.env.DB_PASSWORD
    const dbUrl = process.env.DB_URL

    await mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Deve listar todos os livros', async () => {
    await Livro.create({
      titulo: 'Livro de Teste',
      editora: 'Editora de Teste',
      paginas: 200,
    });

    const response = await request(app).get('/livros');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve cadastrar um novo livro', async () => {
    const autorCriado = await Autor.create({
      nome: 'Autor do Livro',
      nacionalidade: 'Testelandia',
    });

    const novoLivro = {
      titulo: 'Novo Livro',
      editora: 'Editora de Teste',
      paginas: 150,
      autor: autorCriado._id,
    };

    const response = await request(app)
      .post('/livros/cadastrar')
      .send(novoLivro);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Cadastrado com sucesso');
    expect(response.body.livro.titulo).toBe('Novo Livro');
  });
});
