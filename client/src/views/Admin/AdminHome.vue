<template >
  <div class="bg-yellow-100 flex">
    <TaskbarAdmin />
    <div
      class="
        control
        bg-white
        w-96
        h-72
        m-auto
        border-4 border-gray-600 border-opacity-25
        shadow-2xl
        flex flex-col items-center
      "
    >
      <p class="my-8">USUARIOS EN ACTIVO: <span>{{ usuariosActivos }}</span></p>
      <p class="my-8">COLECCIONES DISPONIBLES: <span>{{ collectionsActivas }}</span></p>
      <p class="my-8">CROMOS DISPONIBLES: <span>{{ cardsActivas }}</span></p>
      <h2></h2>
    </div>
  </div>
</template>

<script>
import TaskbarAdmin from "./TaskbarAdmin.vue";
import {
  getAllUsers,
  getAllCollectionsPublished,
  getAllCards,
} from "../../services/Api";
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Gallery",
  components: {
    TaskbarAdmin,
  },
  setup() {
    const usuariosActivos = ref(0);
    const collectionsActivas = ref(0);
    const cardsActivas = ref(0);

    onMounted(async () => {
      const responseUser = await getAllUsers();
      const userLength = responseUser.data.length;
      usuariosActivos.value = userLength;

      const responseCollection = await getAllCollectionsPublished();
      const collectionsLength = responseCollection.data.length;
      collectionsActivas.value = collectionsLength;

      const responseCards = await getAllCards();
      const cardsLength = responseCards.data.length;
      cardsActivas.value = cardsLength;

    });

    return {
      usuariosActivos,
      collectionsActivas,
      cardsActivas,
    };
  },
};
</script>

<style>
img.card {
  margin-left: auto;
  margin-right: auto;
  width: 17.3rem;
  height: 27rem;
  border-radius: 1.3rem;
  border: 4px solid rgba(0, 128, 0, 0.452);
}
</style>