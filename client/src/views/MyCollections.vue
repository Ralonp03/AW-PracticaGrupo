<template>
<div>
    <div class="flex">

    <TaskBar/>
    <div class="Background">
      <div class="Collections">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Bienvenido a tu tablero</span> <br>
                <span style="font-size:60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Pokemon: {{cartas1}}/10 ({{estateCollection1}}) </span><br>
                <span style="font-size:60%" class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Cartas Coches: {{cartas2}}/10 ({{estateCollection2}})</span>

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
import { loginON } from '../services/Api';
import { useStore } from "vuex";


export default {
  name: "MyCollections",
  methods: {

   

    

    async login(){
    const store = useStore();

        let username = store.getters.getUserName;

        const response = await loginON(username)

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
                if(this.cartas1 > 0 && this.cartas1 < 10){
        this.estateCollection1 = "Incompleta"
      }else if(this.cartas1 == 10){
        this.estateCollection1 = "Completada"
      }
     
            }else{
                this.cartas2++;
                 if(this.cartas2 > 0 && this.cartas2 < 10){
        this.estateCollection2 = "Incompleta"
      }else if(this.cartas2 == 10){
        this.estateCollection2 = "Completada"
      }
            }
        }
        i++;
            }catch(e){
                error = true
                
            }

        }
       
        }
        

    },
    
  },
  
  components: {
    TaskBar

  },
  data: () => {
    return {
      cartasUser :[],
      cartas1: 0,
      cartas2: 0,
      estateCollection1: "No iniciada",
      estateCollection2: "No iniciada"
        }
  },
  beforeMount(){
    this.login()
     },
 

    
  
};
</script>

<style>
.Background{
  width: 100%;
  margin-left: 0px;
}
    
</style>