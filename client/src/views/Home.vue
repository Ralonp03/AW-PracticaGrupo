<template>
  <div class="flex">
    <TaskBar :points="points"/>
     <div class="collections h-3/6 flex">
      <PokemonCollection title="Pokemon Collection" />
      <CarCollection title="Car Collection"/>
    </div>
  </div>
</template>

<script>
import TaskBar from "./TaskBar.vue";
import PokemonCollection from "./PokemonCollection.vue";
import CarCollection from "./CarCollection.vue";
import { getInfoUser } from '../services/Api'
import { ref } from 'vue'
import{ useStore } from 'vuex'
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    TaskBar,
    PokemonCollection,
    CarCollection,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const points = ref(0)

    onMounted(async () => {
      !store.state.auth && router.push('/login')
      points.value = await getInfoUser(store.getters.getUserName);

    })

    return { points }
  },
};
</script>

<style></style>
