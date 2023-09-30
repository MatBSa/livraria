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
              @click="openBookModal(book)"
              plain
            >
              Mais Informações
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <book-info-modal
      :book="selectedBook"
      :dialog="dialog"
      @update:dialog="updateDialog"
      @dialog-closed="handleDialogClosed"
    />
  </div>
</template>

<script>
import BookInfoModal from "@/components/BookInfoModal.vue";
import BookService from "@/services/BookService.js";

export default {
  name: "BookList",
  data() {
    return {
      books: [],
      dialog: false,
      selectedBook: null,
    };
  },
  components: {
    BookInfoModal,
  },
  methods: {
    fetchBooks() {
      BookService.getBooks()
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    },
    openBookModal(book) {
      this.selectedBook = book;
      this.dialog = true;
    },
    updateDialog(value) {
      this.dialog = value;
    },
    handleDialogClosed() {
      this.dialog = false;
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

.info-button {
  cursor: pointer;
}

.info-button:hover {
  text-decoration: underline;
}
</style>
