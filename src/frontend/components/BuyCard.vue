
<template>
 <div class="row">

  <div class="column" style="background-color:#aaa;">
<!-- img v-bind:src="require('../images/Logo.png')" alt=""> -->
<div class="card" style="background-color:red;">

</div>
 </div>

  <div class="column" style="background-color:#aaa;">

 <span class="think"> <b>Precio:</b> </span ><span class="datas">{{ priceCard }}</span><br>
 <span class="think"><b>Mis puntos:</b> </span><span class="datas">{{ myPoints}}</span>
<hr>
 <button v-on:click.prevent="decrement">-</button><p>{{ count }}</p>
  <button  v-on:click.prevent="increment">+</button><br>
  <button v-on:click.prevent="buy">Comprar</button>
 </div>

  </div>
</template>

<script>
export default {
      name: 'Gallery',

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
* {
  box-sizing: border-box;
}

.row {
  display: flex;
}
.column {
  flex: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}
.card {
  height: 200px;
  width: 110px;
  background-color: powderblue;
    margin-left : 200px;

}
.think{

margin-right : 40px;
}

</style>
