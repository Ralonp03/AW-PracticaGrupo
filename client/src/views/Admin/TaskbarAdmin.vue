<template>
  <div class="h-screen w-60 bg-blue-600 flex flex-col text-center text-white items-center border-2 border-black">
    <h2 class="font-serif mb-4">KioskoROC</h2>
    <div class="logo mb-4">
      <img src="../../assets/admin.png" class="ml-4 h-24 w-24" />
    </div>
    <p class="mb-4">Administrador: <span class="font-bold w-full "> {{ username }}</span></p>
    <div class="buttons flex flex-col w-full ">
      <button @click="colectionRoute" class="block hover:bg-blue-700 hover:border-2">Colecciones</button>
      <button @click="cardRoute" class="mt-4 block hover:bg-blue-700 hover:border-4 hover:border-gray-200">Cromos</button>
      <button @click="inicioRoute" class="mt-4 block hover:bg-blue-700 hover:border-4 hover:border-gray-200">Inicio</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref("");

    onMounted(async () => {
      username.value = store.getters.getUserName;
    });
    const colectionRoute = () => {
      router.push("/edit/collections");
    };

    const cardRoute = () => {
      router.push("/edit/cards");
    };

    const inicioRoute = () => {
      router.push("/dashboard");
    };

    return {
      username,
      colectionRoute,
      cardRoute,
      inicioRoute
    };
  },
};
</script>

<style>
</style>