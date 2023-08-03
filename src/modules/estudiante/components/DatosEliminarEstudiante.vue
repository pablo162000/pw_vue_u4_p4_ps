<template>
  <input v-model="id" type="text" />
  <button @click="eliminarEstudiante">Eliminar</button>
 

  <label>Se ha eliminado el estudiante Nombre:</label>
  <input v-model="nombre" type="text" />


</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
     
    };
  },
  methods: {
    async eliminarEstudiante() {
      const data = await eliminarEstudianteFachada(this.id);
      this.nombre = data.nombre


     
    },
  },
};
</script>

<style>
</style>