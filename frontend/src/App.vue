<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img
        src="./assets/livrariaTuring.jpeg"
        max-height="50"
        max-width="50"
        class="mr-2"
      ></v-img>
      <v-toolbar-title>Livraria Turing</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <BookForm @book-added="fetchBooks" /> -->
      <!-- O botão para cadastro de livro foi comentado -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <BookList ref="bookList" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BookList from "./components/BookList.vue";
// import BookForm from "./components/BookForm.vue";  // Botão para cadastro de livro foi comentado

export default {
  name: "App",
  components: {
    BookList,
    // BookForm  // Botão para cadastro de livro foi comentado
  },
  methods: {
    fetchBooks() {
      this.$refs.bookList.fetchBooks();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
// Também deve criar uma página ou modal para que o usuário possa editar os dados do livro e que deve usar o endpoint '/livros/atualizar/:id' do tipo put. Por fim, também deve ser criada uma página ou modal para que o usuário possa remover o livro da livraria usando o endpoint '/livros/remover/:id' do tipo delete. Gere os arquivos do projeto desse frontend, levando em consideração que o backend já está pronto e com os endpoints que foram fornecidos.
