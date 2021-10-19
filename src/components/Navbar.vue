<template>
  
    <v-container>
    <v-app-bar
      color="dark"
      dense
      dark
    >
      <v-app-bar-nav-icon 
      @click="$emit('toggle-drawer')">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Curso Alfa Web</v-toolbar-title>

      <v-spacer></v-spacer>

      <SignIn v-show="!$store.state.sesion.urusario" />
      <SignOut v-show="$store.state.sesion.urusario" />
    </v-app-bar>

     </v-container>
  
 
</template>

<script>

import SignIn from "../components/Sign/SignIn.vue";
import SignOut from "../components/Sign/SignOut.vue";

  export default {
    components: {
      SignIn, SignOut
    },
  
  };
</script>

<style>

</style>