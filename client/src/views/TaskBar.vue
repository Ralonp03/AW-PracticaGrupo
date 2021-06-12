<template>
  <div class="p-4 bg-green-200 h-screen w-64 flex flex-col items-center">
    <h2>KioskoROC</h2>
   
    <p class="text-center">
      {{ username }} <span> {{ userPoints }} </span> puntos
    </p>

    <ul class="mt-10 w-full flex flex-col items-center text-center list-none">
      <li class="w-full mt-4 hover:bg-green-300">
        <router-link class=" text-black " to="/collections"
          >Mis Colecciones</router-link
        >
      </li>
      <li class="w-full mt-4 hover:bg-green-300">
        <router-link class="list-none text-black " to="/information"
          >Información</router-link
        >
      </li>
      <li class="w-full mt-4 hover:bg-green-300">
        <router-link class="list-none text-black " to="/buyCard"
          >Comprar</router-link
        >
      </li>
      <li class="w-full mt-4 border-white-100 hover:bg-green-300">
        <button class="w-12 h-8 border-solid">
          <router-link class="list-none text-black " to="/home"
            >Inicio</router-link
          >
        </button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
  setup(){
    const store = useStore()
    const username = ref("")
    const userPoints = ref("")


    onMounted(() => {
      username.value = store.getters.getUserName
      userPoints.value = store.getters.getUserPoints
    })

    return { username, userPoints }
  }
};
</script>