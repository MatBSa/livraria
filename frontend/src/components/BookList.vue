<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(book, index) in books"
        :key="book.id"
      >
        <v-card :id="`book-card-${index}`" max-width="400">
          <v-card-title :id="`book-title-${index}`">{{
            book.titulo
          }}</v-card-title>
          <v-card-subtitle :id="`book-editora-${index}`">{{
            book.editora
          }}</v-card-subtitle>
          <v-card-text :id="`book-text-${index}`">
            Preço: {{ book.preco }}<br />
            Páginas: {{ book.paginas }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              :id="`more-info-btn-${index}`"
              color="primary"
              @click="openBookModal(book._id)"
              >Mais Informações</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title id="modal-book-title">{{ book.titulo }}</v-card-title>
        <v-card-text id="modal-book-text">
          <p>Editora: {{ book.editora }}</p>
          <p>Preço: {{ book.preco }}</p>
          <p>Páginas: {{ book.paginas }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Fechar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BookService from "@/services/BookService.js";

export default {
  name: "BookList",
  data() {
    return {
      books: [],
      dialog: false,
      book: {},
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
    openBookModal(id) {
      BookService.getBook(id)
        .then((response) => {
          this.book = response.data;
          this.dialog = true;
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
