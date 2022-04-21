import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Home from '../views/Home.vue'
import ListPokemon from '../views/ListPokemon.vue'
import Pokemon from '../views/Pokemon.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list-pokemon',
    name: 'list-pokemon',
    component: ListPokemon
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: Pokemon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
