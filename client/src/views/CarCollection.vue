<template>
<div>
    <div
      class="collection ml-12 mt-12 w-96 h-96 z-0 cursor-pointer shadow-2xl"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <h2 class="w-full">{{ title }}</h2>

      <div class="absolute mt-16 ml-16">
        <img v-bind:src="require('../assets/LogoCoches.png')" alt="" />
      </div>
      <div class="absolute mt-12 ml-12">
        <img v-bind:src="require('../assets/Coches/Coche1.png')" alt="" />
      </div>
      <div class="absolute mt-8 ml-8">
       <img v-bind:src="require('../assets/Coches/Coche2.png')" alt="" />
      </div>
      <div class="absolute mt-4 ml-4">
              <img v-bind:src="require('../assets/Coches/Coche3.png')" alt="" />
      </div>
    </div>

    <div
      v-if= "hover"
      class=" ventanaColecciones ml-4 mt-4 absolute h-2/4 w-2/4 z-10 top-2 shadow-2lg grid grid-flow-col grid-cols-10 grid-rows-1 gap-1"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        v-bind:src="require('../assets/Coches/Coche1.png')"
        alt=""
        class="cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:scale-150"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche2.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche3.png')"
        alt=""
        class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche4.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche5.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche6.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche7.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche8.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche9.png')"
        alt=""
         class="h-92 w-92"
      />
      <img
        v-bind:src="require('../assets/Coches/Coche10.png')"
        alt=""
         class="h-92 w-92"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: String,
  },
  setup() {
    const hover = ref(false);

    return {
      hover,
    };
  },
};
</script>

<style></style>
