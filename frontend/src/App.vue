<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img
        src="./assets/livrariaTuring.jpeg"
        max-height="50"
        max-width="50"
        class="mr-2"
      ></v-img>
      <v-toolbar-title>LeiaMais</v-toolbar-title>
      <v-spacer></v-spacer>
      <BookForm @book-added="fetchBooks" />
      <!-- Adicionando espaçamento entre os botões -->
      <div style="margin-right: 16px"></div>
      <AuthorForm @author-added="fetchAuthors" />
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
import BookForm from "./components/BookForm.vue";
import AuthorForm from "./components/AuthorForm.vue";

export default {
  name: "App",
  components: {
    BookList,
    BookForm,
    AuthorForm,
  },
  methods: {
    fetchBooks() {
      this.$refs.bookList.fetchBooks();
    },
    fetchAuthors() {
      console.log("Fetching authors...");
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

