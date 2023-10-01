<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="resetForm">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" dark v-bind="attrs" v-on="on">Novo Livro</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Adicionar novo livro</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="book.titulo"
                label="Título"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="book.editora"
                label="Editora"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model.number="book.preco"
                label="Preço"
                required
                type="number"
                prefix="R$ "
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model.number="book.paginas"
                label="Páginas"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="book.autor"
                :items="authors"
                item-text="nome"
                item-value="_id"
                label="Autor"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="resetForm">Fechar</v-btn>
        <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BookService from "@/services/BookService.js";

export default {
  data() {
    return {
      dialog: false,
      authors: [],
      book: this.defaultBook(),
    };
  },
  methods: {
    defaultBook() {
      return {
        titulo: "",
        editora: "",
        preco: 0,
        paginas: 0,
        autor: null,
      };
    },
    save() {
      const jsonPayload = JSON.stringify({
        titulo: this.book.titulo,
        editora: this.book.editora,
        preco: this.book.preco,
        paginas: this.book.paginas,
        autor: this.book.autor,
      });

      BookService.postBook(jsonPayload)
        .then(() => {
          this.resetForm();
          this.$emit("book-added");
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    resetForm() {
      this.dialog = false;
      this.book = this.defaultBook();
    },
  },
  created() {
    BookService.getAuthors().then((response) => {
      this.authors = response.data;
    });
  },
};
</script>
