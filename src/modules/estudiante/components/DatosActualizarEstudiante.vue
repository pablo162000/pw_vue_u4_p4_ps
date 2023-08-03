<template>
  <div class="container">
    <p>Id: <input v-model="id" type="text" /></p>
    <p>Cedula: <input v-model="cedula" type="text" /></p>
    <p>Nombre: <input v-model="nombre" type="text" /></p>
    <p>Apellido: <input v-model="apellido" type="text" /></p>
    <button class="button" @click="actualizarEstudiante">Actualizar</button>
  </div>
</template>
  
  <script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "pichincha",
      };

      await actualizarEstudianteFachada(data, this.id);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>