<template>
  <div class="about">
    <h1>Sobre nosotros</h1>
    <br />
    <p>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consectetur voluptatum quaerat accusamus assumenda quam quisquam non velit nihil magnam inventore saepe provident eum expedita ullam, asperiores beatae possimus! Minima?</p>
    <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

  <br />
  <br />

  </div>
</template>
<script>

  export default {
    data () {
      return {
        items: [
          {
            src: 'https://desafiolatam.com/assets/home/aprende-haciendo-84db4be983043bbfcb6885b9401f3e9fef39c719a1b76664dbf30becd6b07e8f.jpg',
          },
          {
            src: 'https://desafiolatam.com/assets/home/tiempo-fa695e3df79bd49d0116ae04405b99006c5d44952bd4a8223586b7467efbed90.jpg',
          },
          {
            src: 'https://desafiolatam.com/assets/home/contenido-de-calidad-844dd503fa1dcc47778309173a73fadb3a75014fa0530e66e6df3e100146906a.jpg',
          },
          {
            src: 'https://desafiolatam.com/assets/home/comunidad-de-aprendizaje-b37762317fdae6e9132f8784bc6435fbe389e57abf784541e282485aa932248d.jpg',
          },
        ],
        
      }
    },
  }
</script>
