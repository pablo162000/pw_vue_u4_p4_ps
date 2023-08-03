<template>
  <label>Cedula:</label>

  <input v-model="cedula" type="text" />

  <label>Nombre:</label>
  <input v-model="nombre" type="text" />
  <label>Apellido:</label>
  <input v-model="apellido" type="text" />
  <button @click="guardarEstudiante">Guardar</button>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {
    data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async guardarEstudiante() {

        const data = {

            cedula : this.cedula,
            nombre: this.nombre,
            apellido: this.apellido, 
            provincia: "pichincha",

        }

        await ingresarEstudianteFachada(data);
     
    },
  },
};
</script>

<style>
</style>