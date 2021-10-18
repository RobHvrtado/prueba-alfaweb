import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [

  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("../views/Cursos.vue"),
    children: [
      {
        path: "/cursos/agregar",
        name: "CursoAdd",
        component: () => import("../views/CursoAdd.vue"),

      },
      {
        path: ":id", 
        name: "DetallesCurso", 
        component: () => import("../views/CursoEdit.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
