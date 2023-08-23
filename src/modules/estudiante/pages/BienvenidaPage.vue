<template>
  <div class="container">
    

<h1>Hola Bienvenidos</h1>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped >
.container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 340px;
  height: 450px;
  background: #1d6de4;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-shadow: 0 0 40px -10px black;
  font-family: Georgia, Times, "Times New Roman", serif;
}

p::before {
    content: attr(type);
    display: block;
    margin: 5px 2px;
    font-size: 14px;
    color: #ffcf0f ;

}

input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #ffcf0f;
    background: none;
}

::placeholder {
  color: #ffcf0f;

}
input:focus {
    border-bottom: 2px solid #af412e;
    outline: none;
}



</style>