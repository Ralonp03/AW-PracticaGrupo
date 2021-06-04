<template>
<div>
    <TaskBar/>
    <div class="Background">
        <div class="Collections">
            <h1 title="Collection" class="font-bold">COLECCIONES</h1>
            <CarCollection title="Coleccion De Coches" class="font-bold"/>
            <PokemonCollection title="Pokemon Collection" class="font-bold"/>
        </div>
    </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import TaskBar from './TaskBar.vue'
import CarCollection from './Car-collection.vue'
import PokemonCollection from './Pokemon-collection.vue'
export default {
    name: 'HomeVisitante',
    components: {
        CarCollection,
        PokemonCollection,
        TaskBar
    },
    setup(){
        const route = useRouter()
        const login = () => {
            route.push('/login')
        }
        const register = () => {
            route.push('/register')
        }
        const home = () => {
            route.push('/home')
        }
        const buyCard = () => {
            route.push('/buyCard')
        }
        return {
            login,
            register,
            home,
            buyCard,
        }
    }
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