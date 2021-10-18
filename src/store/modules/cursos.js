import Firebase from "firebase"

export const cursosModule = {
    namespaced: true,
    state: {
        data: []
    },

    mutations: {
        SET_CURSOS_DATA(state, nuevoCursosData) {
            state.data = nuevoCursosData;
        },
    },

    actions: {

      /* con esto me traigo los datos del firestore */

        getAllCursos(context) {
            Firebase
            .firestore()
            .collection("cursos")
            .get()
            .then(documents => {
                const cursos = [];
                documents.forEach(document => {
                   cursos.push({ id: document.id, ...document.data()});
                });
                context.commit("SET_CURSOS_DATA", cursos);
            });
        },
    },

};