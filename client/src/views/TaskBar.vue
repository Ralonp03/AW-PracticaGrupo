<template>
    <div>
        <ul>
            <h2 style="margin-left: 60px">KioskoROC</h2>
            <img style="margin-left: 90px" v-bind:src="require('../assets/Avatar.png')" alt="">
            <li><a>Mis puntos:</a></li>
            <li><a href="/collections">Colecciones</a></li>
            <li><a href="/information">Informacion</a></li>
            <li><a href="/buyCard">Comprar</a></li>
            <li><a href="/home">Inicio</a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 15%;
  height:100%;
  background-color: #04AA6D;;
  position: fixed;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #04AA6D;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}

</style>


