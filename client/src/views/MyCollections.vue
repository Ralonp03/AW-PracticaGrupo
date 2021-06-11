<template>
<div>
    <TaskBar/>
    <div class="Background">
      <div class="Collections">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Bienvenido a tu tablero</span> <br>
                <span style="font-size:60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Pokemon: {{cartas1}}/10 </span><br>
                <span style="font-size:60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Coches: {{cartas2}}/10</span>

            </h1>
          </div>
           <div
        class="min-h-screen bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-s"
      >
       <div
          class="ml-140 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-2"
        >
          
          <div class="p-4 grid gap-4 grid-flow-col auto-cols-max border-gray-800" v-for="selected in cartasUser" :key="selected">
          <img v-if="selected == 'Coche1'" v-bind:src="require(`../assets/Coches/Coche1.png`)" alt="" />
          <img v-if="selected == 'Coche2'" v-bind:src="require(`../assets/Coches/Coche2.png`)" alt="" />
          <img v-if="selected == 'Coche3'" v-bind:src="require(`../assets/Coches/Coche3.png`)" alt="" />
          <img v-if="selected == 'Coche4'" v-bind:src="require(`../assets/Coches/Coche4.png`)" alt="" />
          <img v-if="selected == 'Coche5'" v-bind:src="require(`../assets/Coches/Coche5.png`)" alt="" />
          <img v-if="selected == 'Coche6'" v-bind:src="require(`../assets/Coches/Coche6.png`)" alt="" />
          <img v-if="selected == 'Coche7'" v-bind:src="require(`../assets/Coches/Coche7.png`)" alt="" />
          <img v-if="selected == 'Coche8'" v-bind:src="require(`../assets/Coches/Coche8.png`)" alt="" />
          <img v-if="selected == 'Coche9'" v-bind:src="require(`../assets/Coches/Coche9.png`)" alt="" />
          <img v-if="selected == 'Coche10'" v-bind:src="require(`../assets/Coches/Coche10.png`)" alt="" />
          <img v-if="selected == 'Pokemon1'" v-bind:src="require(`../assets/Pokemons/Pokemon1.png`)" alt="" />
          <img v-if="selected == 'Pokemon2'" v-bind:src="require(`../assets/Pokemons/Pokemon2.png`)" alt="" />
          <img v-if="selected == 'Pokemon3'" v-bind:src="require(`../assets/Pokemons/Pokemon3.png`)" alt="" />
          <img v-if="selected == 'Pokemon4'" v-bind:src="require(`../assets/Pokemons/Pokemon4.png`)" alt="" />
          <img v-if="selected == 'Pokemon5'" v-bind:src="require(`../assets/Pokemons/Pokemon5.png`)" alt="" />
          <img v-if="selected == 'Pokemon6'" v-bind:src="require(`../assets/Pokemons/Pokemon6.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon7'" v-bind:src="require(`../assets/Pokemons/Pokemon7.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon8'" v-bind:src="require(`../assets/Pokemons/Pokemon8.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon9'" v-bind:src="require(`../assets/Pokemons/Pokemon9.jpg`)" alt="" />
          <img v-if="selected == 'Pokemon10'" v-bind:src="require(`../assets/Pokemons/Pokemon10.jpg`)" alt="" />
 
            </div>

      </div>
    </div>
          </div>
</div>

</div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue";
import { getCard } from '../services/Api';
import { loginUser } from '../services/Api';

export default {
  name: "Gallery",
  methods: {

   

    

    async login(){
    const username = "cr7";//cambiar
        const passwd = "1234";//cambiar

        const response = await loginUser(username,passwd)

        if(response.status === 200){
        let error = false;
        let i = 0;
        while(error == false){
            try{
        let elementoCard = response.data.cards[i]
        let responseId = await getCard(elementoCard)

        if(responseId.status === 200){
            this.cartasUser.push(responseId.data.name.toString())
            if(responseId.data.name.toString().search("Coche")){
                this.cartas1++;
            }else{
                this.cartas2++;
            }
        }
        i++;
            }catch(e){
                error = true
                
            }

        }
       
        }
        

    },
    prepararCartas(){
      console.log(this.cartasUser)
      this.cartasUser.forEach(element => {
          console.log(element)
      });
  },
  },
  
  components: {
    TaskBar

  },
  data: () => {
    return {
      units: 0,
      count: 0,
      selected:"Coche 1",
      priceCard: 200,
      myPoints: 300,
      cartasUser :[],
      cartas1: 0,
      cartas2: 0
        }
  },
  beforeMount(){
    this.login(),
    this.prepararCartas()
 },
 

    
  
};
</script>

<style>
    .Background {
      margin-left:10%;
    }
    .Collections {
        text-align:center;
    }
    .Events {
        text-align:center;
    }
    .img{
        display:inline;
    }
</style>