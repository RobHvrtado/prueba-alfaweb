export const moduleSesion = {
    namedspaced: true,
    state: {
        usuario: null,
    },

    mutations: {
        SET_USER(state, nuevoUsuario) {
          state.usuario = nuevoUsuario;
        },
    },

    actions: {
        configurarUsuario(context, usuario) {
            context.commit("SET_USUARIO", usuario);
        },
    },

};