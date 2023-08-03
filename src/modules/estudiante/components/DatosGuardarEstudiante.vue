<template>
  <div class="container">
    <p>Cedula: <input v-model="cedula" type="text" /></p>
    <p>Nombre: <input v-model="nombre" type="text" /></p>
    <p>Apellido: <input v-model="apellido" type="text" /></p>

    
    <button class="button" @click="guardarEstudiante">Guardar</button>
  </div>
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
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "pichincha",
      };

      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>