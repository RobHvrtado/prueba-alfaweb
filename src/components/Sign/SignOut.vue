<template>
  <v-btn text depressed>
      {{ $store.state.sesion.user ? 
         $store.state.sesion.user.email : "cerrar sesion" }} 
      <v-icon right>mdi-logout</v-icon>

  </v-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>