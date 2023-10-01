<template>
  <v-dialog v-model="dialog" max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" dark v-bind="attrs" v-on="on">Novo Autor</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Adicionar novo autor</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="author.nome"
                label="Nome"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="author.nacionalidade"
                label="Nacionalidade"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="resetForm">Fechar</v-btn>
        <v-btn color="blue darken-1" text @click="saveAuthor">Salvar</v-btn>
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
      author: this.defaultAuthor(),
    };
  },
  methods: {
    defaultAuthor() {
      return {
        nome: "",
        nacionalidade: "",
      };
    },
    saveAuthor() {
      const jsonPayload = JSON.stringify({
        nome: this.author.nome,
        nacionalidade: this.author.nacionalidade,
      });

      BookService.postAuthor(jsonPayload)
        .then(() => {
          this.resetForm();
          this.$emit("author-added");
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    resetForm() {
      this.dialog = false;
      this.author = this.defaultAuthor();
    },
  },
};
</script>

<style scoped>
</style>
