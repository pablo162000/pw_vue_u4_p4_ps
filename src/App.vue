<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <NavBar></NavBar>
  <router-view/>

  
</template>

<script>

import NavBar from "./modules/estudiante/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
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

.button {
  position: relative;
  background-color: #42b983;
;
  border: solid #2c3e50;
  font-size: 20px;
  color: #FFFFFF;
  padding: 2px;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button:after {
  content: "";
  background:#2c3e50 ;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
p {
  color: #42b983;
}
h1{
  color: #42b983;
}

body{
  background-color: #111921 ;
}
</style>
