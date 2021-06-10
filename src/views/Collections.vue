<template>
<div>
    <TaskBar/>
    <div class="Background">
      <div class="Collections">
          <h1 class="font-bold">COLECCIONES</h1>
          <CarCollection title="Car Brand Collection" class="font-bold"/>
          <PokemonCollection title="Pokemon Collection" class="font-bold"/>
      </div>
    </div>
</div>
</template>

<script>
import CarCollection from './Car-collection.vue'
import PokemonCollection from './Pokemon-collection.vue'
import TaskBar from './TaskBar.vue'
export default {
    name: 'HomeVisitante',
    components: {
        CarCollection,
        PokemonCollection,
        TaskBar
    },
}
</script>

<style>
    .Background {
      margin-left:10%;
    }
    .Collections {
        text-align:center;
    }
    .Events {
        text-align:center;
    }
</style>