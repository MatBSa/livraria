<template>
  <v-dialog v-model="internalDialog" max-width="500" @input="closeDialog">
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
        <v-btn color="blue darken-1" text @click="closeDialog">Fechar</v-btn>
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
  computed: {
    internalDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit("update:dialog", value);
        if (!value) {
          this.$emit("dialog-closed");
        }
      },
    },
  },
  methods: {
    closeDialog() {
      this.internalDialog = false;
    },
  },
};
</script>
