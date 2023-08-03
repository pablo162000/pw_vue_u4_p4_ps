<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <Estudiante></Estudiante>

  <GuardaEstudiante></GuardaEstudiante>

  <ActualizarEstudiante></ActualizarEstudiante>
  <EliminarEstudiante></EliminarEstudiante>
</template>

<script>
import Estudiante from "./modules/estudiante/page/ConsultaEstudiante.vue";
import GuardaEstudiante from "./modules/estudiante/page/GuardaEstudiante.vue";
import ActualizarEstudiante from "./modules/estudiante/page/ActualizarEstudiante.vue";
import EliminarEstudiante from "./modules/estudiante/page/EliminarEstudiante.vue";

export default {
  name: "App",
  components: {
    Estudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
