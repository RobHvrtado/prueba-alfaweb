<template>
  <div>
      <h1>Editar Curso: {{ $route.params.id }}</h1>
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
      required
    ></v-text-field>

      <v-text-field
      :disabled="loading"
      v-model="curso.cupos"
      type="number"
      label="cupos"
      required
    ></v-text-field>

    <v-text-field
    :disabled="loading"
      v-model="curso.inscritos"
      label="inscritos"
      required
    ></v-text-field>

    <v-text-field
    :disabled="loading"
      v-model="curso.duracion"
      label="duracion"
      required
    ></v-text-field>

      <v-text-field
      :disabled="loading"
      v-model="curso.costo"
      type="number"
      label="costo del curso"
      required
    >$</v-text-field>

    <v-text-field
    :disabled="loading"
      v-model="curso.codigo"
      label="codigo del curso"
      required
    ></v-text-field>

    <v-switch v-model="curso.estado"
    label="estado"></v-switch>

     <v-text-field
      :disabled="loading"
      v-model="url"
      label="Url de la imagen"
      required
    ></v-text-field>

    <!-- botones  -->
  <v-layout justify-space-between>
    <v-btn
      type="submit"
      color="success"
      class="mr-4"
      :loading="loading"
    > Guardar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar Formulario
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Limpiar validacion
    </v-btn>

     <v-btn
      color="info"
      @click="resetValidation"
    >
      Regresar
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
    beforeRouteEnter(to, from, next) {
        Firebase.firestore()
        .collection("cursos")
        .doc(to.params.id)
        .get()
        .then((document) => {
            next((vm) => {
                vm.curso = { id: document.id, ...document.data( )};
            });
        });
    },

    data: () => ({
        curso: null,
        loading: false,
    }),

    methods: {
        guardarCambios() {
            if(this.$refs.form.validate() ) {
               this.loading = true;
               Firebase.firestore()
               .collection("cursos")
               .doc(this.curso.id)
               .update(this.curso)
               .then(() => {
                   this.loading = false;
                   this.$router.push("/cursos");
               })
               .catch(() => {
                   this.loading = false;
               })
            }
        },
    },

}
</script>

<style>

</style>