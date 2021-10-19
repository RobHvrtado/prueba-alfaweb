<template>
  <v-btn text depressed>
      {{ $store.state.sesion.usuario ? 
         $store.state.sesion.usuario.email : "cerrar sesion" }} 
      <v-icon right>mdi-logout</v-icon>

  </v-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>