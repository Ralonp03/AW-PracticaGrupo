<template>
  <div
    class="
      h-screen
      w-60
      bg-blue-600
      flex flex-col
      text-center text-white
      items-center
      border-2 border-black
    "
  >
    <h2 class="font-serif mb-4">KioskoROC</h2>
    <div class="logo mb-4">
      <img src="../../assets/admin.png" class="ml-4 h-24 w-24" />
    </div>
    <p class="mb-4">
      Administrador: <span class="font-bold w-full"> {{ username }}</span>
    </p>
    <div class="buttons flex flex-col w-full items-center">
      <button
        @click="colectionRoute"
        class="block w-full hover:bg-blue-700 hover:border-2"
      >
        Colecciones
      </button>
      <button
        @click="cardRoute"
        class="
          mt-4
          w-full
          block
          hover:bg-blue-700
          hover:border-4 hover:border-gray-200
        "
      >
        Cromos
      </button>
      <button
        @click="inicioRoute"
        class="
          mt-4
          block
          w-full
          hover:bg-blue-700
          hover:border-4 hover:border-gray-200
        "
      >
        Inicio
      </button>
      <button
        @click="logout"
        class="
          logoutBtn
          w-56
          text-center text-black
          bg-gray-200
          absolute
          bottom-4
          border-4 border-red-600
          rounded-full
        "
      >
        Cerrar Sesión
      </button>
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
      inicioRoute,
    };
  },
};
</script>

<style>
.logoutBtn:hover {
  transform:scale(0.95)
}
</style>