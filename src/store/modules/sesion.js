export const moduloSesion = {
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
            context.commit("SET_USER", usuario);
        },
    },

};