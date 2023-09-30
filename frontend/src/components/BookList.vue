<template>
  <div>
    <v-row>
      <v-col
        v-for="(book, index) in books"
        :key="book.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card :id="`book-card-${index}`" class="book-card">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-card-title class="title" v-bind="attrs" v-on="on">{{
                book.titulo.length > 63
                  ? book.titulo.slice(0, 63) + "..."
                  : book.titulo
              }}</v-card-title>
            </template>
            <span>{{ book.titulo }}</span>
          </v-tooltip>
          <v-card-subtitle>{{ book.editora }}</v-card-subtitle>
          <v-card-text class="flex-grow-1">
            <p><strong>Preço:</strong> {{ book.preco }}</p>
            <p><strong>Páginas:</strong> {{ book.paginas }}</p>
          </v-card-text>
          <v-card-actions class="mt-auto">
            <v-btn
              :id="`more-info-btn-${index}`"
              color="blue darken-1"
              text
              @click="openBookModal(book._id)"
              plain
            >
              Mais Informações
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">{{ book.titulo }}</v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <p><strong>Editora:</strong> {{ book.editora }}</p>
                <p><strong>Preço:</strong> {{ book.preco }}</p>
                <p><strong>Páginas:</strong> {{ book.paginas }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
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
.book-card {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.v-card {
  height: 100%;
}

.v-card-subtitle {
  margin-top: -10px;
  margin-bottom: 10px;
}

.v-card-text {
  flex-grow: 1;
}
</style>
