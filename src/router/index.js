import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Movies from '@/views/Movies.vue'
import Shows from '@/views/Shows.vue'
import Actors from '@/views/Actors.vue'
import MediaShow from '@/components/MediaShow.vue'
import ActorShow from '@/components/ActorShow.vue'
import Search from '@/views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors
  },
  {
    path: "/:cat/:id",
    name: "media-show",
    component: MediaShow,
    props: true
  },
  {
    path: "/actor/:id",
    name: "actor-show",
    component: ActorShow,
    props: true
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
