import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/postCSS",
    name: "PostCSS",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/PostCSS/index.vue")
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
