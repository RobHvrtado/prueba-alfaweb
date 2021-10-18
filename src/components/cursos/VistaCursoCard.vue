<template>
<div>
  <v-card class="mx-auto" max-width="345">
    <v-img :src="value.imagen" height="200px" contain></v-img>

    <v-card-text class="grey lighten-2">
    
   <h3 class="mb-6">{{ value.nombre }}</h3>

   <p><strong>Informacion</strong></p>
    <v-timeline align-top-dense>
      <v-timeline-item color="purple" small>
        costo: <strong>{{ value.costo }}</strong>
        <br />
        duracion: <strong>{{ value.duracion }}</strong>
      </v-timeline-item>
      <v-timeline-item color="success" small>
        cupos: <strong>{{ value.cupos }}</strong>
        <br />
        completado: {{ value.estado ? "Si" : "No "}}
      </v-timeline-item>
      <v-timeline-item color="purple" small>
        Fecha de registro
        <br />
        {{ value.fecha_registro }}
      </v-timeline-item>
      <v-timeline-item color="success" small>
        Descripcion
        <br />
        {{ value.descripcion}}
      </v-timeline-item>
    </v-timeline>
    </v-card-text>
  </v-card>

  <br />
  <br />
  
</div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style></style>
