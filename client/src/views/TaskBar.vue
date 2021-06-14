<template>
  <div
    class="sticky top-0 p-4 bg-blue-600 font-bold h-screen w-72 flex flex-col items-center border-r-2 border-black"
  >
    <h2 class="font-serif">KioskoROC</h2>
    <img src="../assets/male.png" class="mt-4 h-16 w-16" />
    <p class="text-center">
      {{ username }}
      <span class="text-green-400 font-bold"> {{ points }} </span> puntos
    </p>

    <ul class="mt-4 w-full flex flex-col items-center text-center list-none">
      <li class="w-full mt-4 hover:bg-green-300 rounded-full">
        <router-link class="text-black block w-full" to="/mycollections"
          >Mis Colecciones</router-link
        >
      </li>
      <li class="w-full mt-4 hover:bg-green-300 rounded-full">
        <router-link class="text-black block w-full" to="/comprar"
          >Comprar</router-link
        >
      </li>
      <li class="w-full mt-4 hover:bg-green-300 rounded-full">
        <router-link class="text-black block w-full" to="/home"
          >Inicio</router-link
        >
      </li>
      
    </ul>
    <button @click="logout" class="w-60 text-center bg-gray-200 absolute bottom-4 border-4 border-red-600 rounded-full">Cerrar Sesión</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { ref } from "vue";
import { getInfoUser } from '../services/Api'
export default {
  props: {
    points: Number
  },
  setup() {
    const store = useStore();
    const router = useRouter()
    const username = ref("");
    const userPoints = ref("");

    onMounted(async () => {
      username.value = store.getters.getUserName;
      userPoints.value = await getInfoUser(username.value)
    });

    const logout = () => {
      store.dispatch('logout')
      router.replace('/')
    }


    return { username, userPoints, logout };
  },
};
</script>
