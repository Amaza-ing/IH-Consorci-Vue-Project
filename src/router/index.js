import { createRouter, createWebHistory } from "vue-router"

import ProductsView from "../views/ProductsView.vue"
import HomeView from "../views/HomeView.vue"
import VueBasics from "../views/VueBasics.vue"
import CoursesView from "@/views/CoursesView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/products", component: ProductsView },
  { path: "/basics", component: VueBasics },
  { path: "/courses", component: CoursesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;