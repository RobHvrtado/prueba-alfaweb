<template>
  <v-form ref="userForm" @submit.prevent="handleFormSubmit">
    <v-text-field 
    outlined label="correo electronico" 
    v-model="form.email"
    :rules="[required]"
    type="email" 
    > 
    </v-text-field>
    <v-text-field 
    outlined label="contraseña" 
    v-model="form.password"
    :rules="[required]"
    type="password"
    >
    </v-text-field>
 <v-layout justify-space-between >
    <v-btn color="success" type="submit">Iniciar</v-btn
    >
    <v-btn color="amber" type="submit" @click="resetValidation"
      >Reinicar validacion</v-btn
    >
    <v-btn color="error" type="submit" @click="resetForm"
      >Reiniciar Formulario</v-btn
    >
 </v-layout>
  </v-form>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "userForm",
   data: () => ({
        form: { email: "", password: "" },
    }),

  methods: {
    async handleFormSubmit() {
      if (this.$refs.userForm.validate()) {

        try {
         await Firebase.auth().
         signInWithEmailAndPassword
         (this.form.email, this.form.password
         );

         this.store.dispatch(
           "sesion/configurarUsuario", 
           Firebase.auth().currentUser);
         
         this.$emit("success");
         
        }catch (e) {
          console.error("me fue mal con el login");
        }
      }
    },

    resetValidation() {
      this.$refs.userForm.resetValidate();
    },

    resetForm() {
     /*  this.$refs.userForm.reset(); */ 
    },

    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
