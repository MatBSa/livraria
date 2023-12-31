<template>
  <v-dialog v-model="internalDialog" max-width="500">
    <v-card>
      <v-card-title id="modal_title_id" class="headline">{{
        editing ? "Editar Livro" : "Detalhes do Livro"
      }}</v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                id="editebook_title_id"
                v-if="editing"
                v-model="editedBook.titulo"
                label="Título"
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-subheader>Editora:</v-subheader>
                  <span v-if="!editing">{{ book?.editora }}</span>
                  <v-text-field
                    id="editebook_publisher_id"
                    v-else
                    v-model="editedBook.editora"
                    label="Editora"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-subheader>Preço:</v-subheader>
                  <span v-if="!editing">{{ book?.preco }}</span>
                  <v-text-field
                    id="editbook_value_id"
                    v-else
                    v-model="editedBook.preco"
                    label="Preço"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-subheader>Páginas:</v-subheader>
                  <span v-if="!editing">{{ book?.paginas }}</span>
                  <v-text-field
                    id="editbook_pages_id"
                    v-else
                    v-model="editedBook.paginas"
                    label="Páginas"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-subheader>Autor:</v-subheader>
              <span v-if="!editing">{{
                book?.autor ? book?.autor.nome : "Autor não disponível"
              }}</span>
              <v-select
                id="editbook_author_id"
                v-else
                v-model="editedBook.autor"
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
        <v-btn id="cancel_id" color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
        <v-btn id="save_id" color="blue darken-1" text @click="toggleEditing">{{
          editing ? "Salvar" : "Editar"
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BookService from "@/services/BookService.js";

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      authors: [],
      editedBook: { ...this.book },
      editing: false,
    };
  },
  computed: {
    internalDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit("update:dialog", value);
        if (!value) {
          this.resetEditedBook();
        }
      },
    },
  },
  methods: {
    closeDialog() {
      this.internalDialog = false;
      this.resetEditedBook();
    },
    resetEditedBook() {
      this.editedBook = { ...this.book };
      this.editing = false;
    },
    toggleEditing() {
      this.editing = !this.editing;
    },
  },
  created() {
    BookService.getAuthors().then((response) => {
      this.authors = response.data;
    });
  },
};
</script>
