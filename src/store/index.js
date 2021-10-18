import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduleSesion} from "./modules/sesion";
import { cursosModule } from "./modules/cursos";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sesion: moduleSesion,
    cursos: cursosModule,
  },
});
