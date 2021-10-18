<template>
<div>
  <v-layout align-center justify-space-between>
    <v-flex shrink>
  <h1 class="text-center">Administracion</h1>
    </v-flex>
    <v-btn color="info" to="/cursos/agregar">Agregar curso</v-btn>
  <br />
  </v-layout>
   <TablaCursos />

   <router-view></router-view>
</div>
</template>

<script>

import Store from "../store";

import TablaCursos from "../components/cursos/TablaCursos.vue";

export default {
    components: { TablaCursos },
      beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/getAllCursos");
    next();
  },
   
        

};
</script>

<style>

</style>