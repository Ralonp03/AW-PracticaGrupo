
<template>
<div>
  <TaskBar/>
  <div class="Background">
    <div class="row">
      <div class="column" style="background-color:#aaa;">
        <div class="card" style="background-color:blue;"></div>
      </div>
      <div class="column" style="background-color:#aaa;">
        <span class="think"> <b>Precio:</b> </span ><span class="datas">{{ priceCard }}</span><br>
        <span class="think"><b>Mis puntos:</b> </span><span class="datas">{{ myPoints}}</span><hr>
        <button v-on:click.prevent="decrement">-</button><p>{{ count }}</p>
        <button  v-on:click.prevent="increment">+</button><br>
        <button v-on:click.prevent="buy">Comprar</button>
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
.row {
  display: flex;
}
.column {
  flex: 50%;
  padding: 10px;
  height: 300px;
}
.card {
  height: 200px;
  width: 110px;
  margin-left : 300px;
}
.think{
margin-right : 40px;
}
.Background {
    margin-left:15%;
    background-color:gray;
    border: 1px solid black;
}
</style>
