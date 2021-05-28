

<template>

<div class="app">

  <TaskBar/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css" integrity="sha384-3fdgwJw17Bi87e1QQ4fsLn4rUFqWw//KU0g8TvV6quvahISRewev6/EocKNuJmEw" crossorigin="anonymous">  <div class="Background">

    <div class="container">
      <div class="flexContainer">
        <div class="card mt-4">
          
            <div class="card-body" >
                <h4 class="card-title" style="text-align:center">Carta</h4>
                    <img v-bind:src="require('../assets/Coches/c5.png')" alt="">
            </div>
        </div>
        <div class="card mt-4" >
            <div class="card-body">
                <h4 class="card-title">Precio: </h4><span class="datas">{{ priceCard }}</span><br>
                <h4 class="card-title">Mis puntos: </h4><span class="datas">{{ myPoints }}</span><br>
                <div class="card-text mb-2">
            </div>
        <button v-on:click.prevent="decrement"  class="btn btn-success" style="margin:20px;">-</button><span>{{ count }}</span>
        <button v-on:click.prevent="increment"  class="btn btn-success"  style="margin:20px">+</button><br>
        <div class="col text-center">
        <button v-on:click.prevent="buy"  class="btn btn-success"  style="text-align:center">Comprar</button>
               </div>
               </div>
           </div>
         </div>
   </div>

  </div>
</div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue"
export default {
  name: 'Gallery',
  components: {
    TaskBar
  },
  data: ()=> {
    return {
      count: 0,
      priceCard : 200,
      myPoints : 400,
    }
  },
  methods: {
    increment () {
      this.count++;
    },
    decrement () {
      if(this.count > 0){
        this.count-- ;
      }
    },buy(){
          if(this.myPoints >= (this.priceCard * this.count)){
       this.myPoints = this.myPoints  - this.count * this.priceCard;
       }
      
    },
  }
}
</script>

<style>

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.flexContainer {
  height: 100%;  
  display: flex;
  flex-direction: row;
}

  .flexContainer > div {
  background-color: #f1f1f1;
  margin: 150px;
  max-height: 100%;
  padding: 20px;
  font-size: 30px;
}

</style>