import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '../views/Films.vue'
import Actors from '../views/Actors.vue'
import Ships from '../views/Ships.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home, meta: {layout:'basic-layout'}},
  { path: '/films', name: 'films', component: Films,  meta: {layout:'basic-layout'}},
  { path: '/films/:id',component: Films,  meta: {layout:'basic-layout'}},
  { path: '/actors', name: 'actors', component: Actors,  meta: {layout:'basic-layout'}},
  { path: '/actors/:id', component: Actors,  meta: {layout:'basic-layout'}},
  { path: '/ships', name: 'ships', component: Ships,  meta: {layout:'basic-layout'}},
  { path: '/ships/:id',component: Ships,  meta: {layout:'basic-layout'}},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
