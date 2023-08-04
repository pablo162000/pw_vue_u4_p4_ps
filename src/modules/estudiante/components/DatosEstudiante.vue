<template>
  <div class="container">
    <p>Cedula:<input v-model="cedula" type="text" /> <button class="button" @click="consultarEstudiante">Consultar</button></p>

    
    

    <div class="datos">
      
      <p>Nombre:<input v-model="nombre" type="text" /></p>
      <p>Apellido:<input v-model="apellido" type="text" /></p>

    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      console.log(data);
    },
  },
  mounted(){
    const {cedula} = this.$route.params;
    console.log(cedula);
   // this.cedula= cedula
    this.consultarEstudiante()
    const nom = this.$route.query.nombre;
    const {nom1} =this.$route.query;
    console.log( this.$route)

    //Pathvariable
    //http://localhost:8080/../estudiantes/:cedula
    //Request Param
    //http://localhost:8080/../estudiantes?provincia=pichincha&ciudad=quito
    



  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.datos {
  
}
</style>