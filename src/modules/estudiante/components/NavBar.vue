<template>
  <div class="container">
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/guardar">Guardar</router-link>

    <router-link to="/consultar">Consultar</router-link>

    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

div {
  padding: 0 30px;

}
div a {
  font-weight: bold;
  color: #42b983;
  margin: 0 10px;
}
</style>