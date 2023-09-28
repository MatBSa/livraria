<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="book in books"
        :key="book.id"
      >
        <v-card max-width="400">
          <v-card-title>{{ book.titulo }}</v-card-title>
          <v-card-subtitle>{{ book.editora }}</v-card-subtitle>
          <v-card-text>
            Preço: {{ book.preco }}<br />
            Páginas: {{ book.paginas }}
          </v-card-text>
          <!-- Você pode adicionar botões ou outras ações aqui -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookService from "@/services/BookService.js";

export default {
  name: "BookList",
  data() {
    return {
      books: [],
      headers: [
        { text: "Título", value: "titulo" },
        { text: "Editora", value: "editora" },
        { text: "Preço", value: "preco" },
        { text: "Páginas", value: "paginas" },
      ],
    };
  },
  methods: {
    fetchBooks() {
      BookService.getBooks()
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
  },
  created() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
body {
  background-color: rgb(248, 249, 250);
}

.v-card {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
}

.v-card-title {
  align-self: center;
}
</style>
