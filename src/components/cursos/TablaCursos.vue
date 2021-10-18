<template>
<div>
  <v-data-table :items="$store.state.cursos.data" :headers="headers">
    <template v-slot:[`item.costo`]="{ item }">
      <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.estado`]="{ item }">
      <v-chip :color="item.estado ? 'info' : 'grey'">
        {{ item.estado ? "Si" : "No" }}
      </v-chip>
    </template>

    <template v-slot:[`item.fecha_creacion`]="{ item }">
      <v-chip color="success">
        {{ item.fecha_creacion ? item.fecha_creacion : "Sin información" }}
      </v-chip>
    </template>

    <!-- aqui estan los botones de ediar y borrar en la tabla -->
    <template v-slot:[`item.acciones`]="{ item }">
      <div>
        <v-btn icon @click="editar(item)">
          <v-icon> mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="borrar(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-table>
  <br />
  <br />
</div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "Curso", value: "nombre" },
      { text: "Cupos", value: "cupos" },
      { text: "Inscritos", value: "inscritos" },
      { text: "Duración", value: "duracion" },
      { text: "Costo", value: "costo" },
      { text: "Terminado", value: "estado" },
      { text: "Fecha", value: "fecha_creacion" },
      { text: "Acciones", value: "acciones" },
    ],
  }),

  methods: {
    editar(item) {
      this.$router.push(`/cursos/${item.id}`); 
    },
    borrar(item) {
      console.log("borrar este item => ", item);
    },
  },
};
</script>

<style></style>
