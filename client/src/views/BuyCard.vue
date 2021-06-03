<template>
  <div class="App">
    <TaskBar />
    <div class="ml-25">
      <div
        class="min-h-screen bg-gray-300 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-s"
      >
        <div
          class="ml-140 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-2"
        >
          <div></div>

          <div
            class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-30 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500"
          >
            <img v-bind:src="require('../assets/Coches/c5.png')" alt="" />
          </div>
          <!-- END SMALL CARD ROUNDED -->

          <!-- SMALL CARD ROUNDED -->
          <div
            class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | "
          >
            <h4
              class="text-black dark:text-gray-100 text-justify font-semibold"
            >
              Precio:
            </h4>
            <span class="datas">{{ priceCard }}</span
            ><br />
            <h4
              class="text-black dark:text-gray-100 text-justify font-semibold"
            >
              Mis puntos:
            </h4>
            <span class="datas">{{ myPoints }}</span
            ><br />
            <div class="flex justify-center m-6">
              <div>
                <button
                  v-on:click.prevent="decrement"
                  class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6"
                >
                  -
                </button>
              </div>
              <div>
                <span class=" line-height-username3 text-5xl">{{ count }}</span>
              </div>
              <div>
                <button
                  v-on:click.prevent="increment"
                  class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 m-6"
                >
                  +</button
                ><br />
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <button
                v-on:click.prevent="buy"
                class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600"
              >
                Comprar
              </button>
            </div>
          </div>
          <!-- END SMALL CARD ROUNDED -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "../views/TaskBar.vue";
export default {
  name: "Gallery",
  components: {
    TaskBar,
  },
  data: () => {
    return {
      count: 0,
      priceCard: 200,
      myPoints: 400,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    buy() {
      if (this.myPoints >= this.priceCard * this.count) {
        this.myPoints = this.myPoints - this.count * this.priceCard;
      }
    },
  },
};
</script>

<style></style>
