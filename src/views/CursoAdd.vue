<template>
  <div>
    <h1>Agregar un curso</h1>

    <v-form
      @submit.prevent="guardarCambios"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        :disabled="loading"
        v-model="curso.nombre"
        label="Name"
        :rules="[required]"
        required
      ></v-text-field>

      <v-text-field
        :disabled="loading"
        v-model="curso.cupos"
        type="number"
        label="cupos"
        :rules="[required]"
        required
      ></v-text-field>

      <v-text-field
        :disabled="loading"
        v-model="curso.inscritos"
        label="inscritos"
        :rules="[required]"
        required
      ></v-text-field>

      <v-text-field
        :disabled="loading"
        v-model="curso.duracion"
        label="duracion"
        :rules="[required]"
        required
      ></v-text-field>

      <v-text-field
        :disabled="loading"
        v-model="curso.costo"
        type="number"
        label="costo del curso"
        :rules="[required]"
        required
        >$</v-text-field
      >

      <v-switch
        v-model="curso.estado"
        label="estado"
        :rules="[required]"
      ></v-switch>

      <v-text-field
        v-model="curso.imagen"
        label="imagen"
        :rules="[required]"
        required
      ></v-text-field>


      <!-- botones  ----------------------------->
      <v-layout justify-space-between>
        <v-btn type="submit" color="success" class="mr-4" :loading="loading">
          Guardar
        </v-btn>

      </v-layout>
    </v-form>

    <br />
    <br />
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    loading: false,
    curso: {
      nombre: "",
      cupos: 0,
      inscritos: 0,
      duracion: "",
      costo: 0,
      estado: false,
      imagen: "",
    },
  }),

  methods: {
    guardarCambios() {
      if (this.$refs.form.validate()) {
        Firebase.firestore()
          .collection("cursos")
          .add(this.curso)
          .then(() => {
            this.loading = false;
            this.$router.push("/cursos");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
        required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
