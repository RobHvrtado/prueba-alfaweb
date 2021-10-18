<template>
<div>
  <h1 class="text-center">Lista de cursos</h1>
  <br />
  <v-row>
      <v-col 
      v-for="curso in $store.state.cursos.data" 
      :key="curso.id" 
      cols="12" 
      sm="3" 
      md="4">
      <VistaCursoCard :value="curso" />
      </v-col>
  </v-row>
  </div>
</template>

<script>
 
import Store from "../store";

export default {
    
    name: "Home",
    components: {
        VistaCursoCard: () => import("../components/cursos/VistaCursoCard.vue"),
    },
    
     beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/getAllCursos");
    next();
  },

}
</script>

<style>

</style>