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
  getAllCollections,
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
      const responseCollection = await getAllCollections();
      const responseCards = await getAllCards();
      // const responseCards = await getAllCards()
      const userLength = responseUser.data.length;
      const collectionsLength = responseCollection.data.length;
      const cardsLength = responseCards.data.length;

      usuariosActivos.value = userLength;
      collectionsActivas.value = collectionsLength;
      cardsActivas.value = cardsLength;
    });

    return {
      usuariosActivos,
      collectionsActivas,
      cardsActivas,
    };
    // const selected = ref("");
    // const priceCard = ref(0);
    // const units = ref(0);
    // const count = ref(0);
    // const countPrice = ref(0);

    // const increment = () => {
    //   count.value++;
    // };
    // const decrement = () => {
    //   count.value--;
    //   if (count.value < 0) count.value = 0;
    // };
    // const incrementPrice = () => {
    //   countPrice.value += 50;
    // };
    // const decrementPrice = () => {
    //   countPrice.value -= 50;
    //   if (countPrice.value < 0) countPrice.value = 0;
    // };

    // const recopilar = async () => {
    //   const response = await getInfoCard(selected.value);
    //   if (response.status === 200) {
    //     if (response.data.state == "active") {
    //       document.getElementById("botn").style.visibility = "visible";
    //       priceCard.value = response.data.price;
    //       units.value = response.data.units;
    //     } else {
    //       alert("Carta no disponible");
    //       priceCard.value = response.data.price;
    //       units.value = response.data.units;
    //       document.getElementById("botn").style.visibility = "hidden";
    //     }
    //   }
    // };

    /*
    const price = () => {
      if (this.priceCard >= this.countPrice) {
        this.priceCard = this.priceCard + this.countPrice;
      } else {
          if(this.countPrice > 0){
              this.priceCard = this.priceCard + this.countPrice;
          }
      }
    };

    const addOrDelete = () => {
        if((this.units + this.count) < 0){
            this.units = 0;
        } else {
            this.units = this.units + this.count;
        }
    };
    */

    //   const actualizar = async () => {
    //     units.value = count.value;
    //     priceCard.value = countPrice.value;

    //     const cardName = selected.value;
    //     const cardUnits = units.value;
    //     const cardPrice = priceCard.value;
    //     await updateDatas(cardUnits, cardPrice, cardName);
    //   };
    //   return {
    //     recopilar,
    //     selected,
    //     priceCard,
    //     units,
    //     increment,
    //     decrement,
    //     incrementPrice,
    //     decrementPrice,
    //     count,
    //     actualizar,
    //   };
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