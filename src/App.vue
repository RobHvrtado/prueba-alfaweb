<template>
  <v-app>
    <Navbar @toggle-drawer="drawer = !drawer" />
    <Sidebar v-model="drawer" />
    
    <v-main>
      <v-container>
        <router-View />
        <v-footer
    dark
    padless contain
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Conectate con nosotros en nuestras redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar, Sidebar
  },

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    drawer: false,
  }),

  mounted() {},
  /*   mounted() { // con esto compruebo y traigo las cosas del firebase paso por paso
  Firebase 
  .firestore()
  .collection("cursos")
  .get()
  .then(documents => {
    documents.forEach(document => {
      this.cursos.push({id: document.id, ...document.data() });
    });

  });
  }, */
};
</script>
