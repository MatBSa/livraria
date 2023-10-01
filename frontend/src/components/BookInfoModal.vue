<template>
  <v-dialog v-model="internalDialog" max-width="500">
    <v-card>
      <v-card-title class="headline">{{
        editing ? "Editar Livro" : "Detalhes do Livro"
      }}</v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-if="editing"
                v-model="editedBook.titulo"
                label="Título"
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-subheader>Editora:</v-subheader>
                  <span v-if="!editing">{{ book.editora }}</span>
                  <v-text-field
                    v-else
                    v-model="editedBook.editora"
                    label="Editora"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-subheader>Preço:</v-subheader>
                  <span v-if="!editing">{{ book.preco }}</span>
                  <v-text-field
                    v-else
                    v-model="editedBook.preco"
                    label="Preço"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-subheader>Páginas:</v-subheader>
                  <span v-if="!editing">{{ book.paginas }}</span>
                  <v-text-field
                    v-else
                    v-model="editedBook.paginas"
                    label="Páginas"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-subheader>Autor:</v-subheader>
              <span v-if="!editing">{{
                book.autor ? book.autor.nome : "Autor não disponível"
              }}</span>
              <v-text-field
                v-else
                v-model="editedBook.autor"
                label="ID do Autor"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="toggleEditing">{{
          editing ? "Salvar" : "Editar"
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
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
};
</script>
