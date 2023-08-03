<template>
  <div class="container">
    <p> Id:<input v-model="id" type="text" /> <button class="button" @click="eliminarEstudiante">Eliminar</button></p>
    <div v-if="mostrarNombre">
      <label>Se ha eliminado el estudiante Nombre:</label>
      <input v-model="nombre" type="text" />
    </div>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
      mostrarNombre: false,
    };
  },
  methods: {
    async eliminarEstudiante() {
      const data = await eliminarEstudianteFachada(this.id);
      this.nombre = data.nombre;
      this.mostrarNombre = true;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>