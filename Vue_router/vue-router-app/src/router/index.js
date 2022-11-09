import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import HelloView from "@/views/HelloView.vue"
import LoginView from "@/views/LoginView.vue"
import { MAX_SAFE_INTEGER } from "core-js/core/number"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // lazy-loading 방식 (첫 로딩에 렌더링 하지 않고 해당 라우터가 동잘할 때 컴포넌트를 렌더링한다.)
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/hello/:userName",
    name: "hello",
    component: HelloView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // 로그인 여부
  const isLoggedIn = false

  // 로그인이 필요한 페이지
  const authPages = ['hello']
  
  const isAuthRequired =  authPages.include(to.name)

  if(isAuthRequired && !isLoggedIn) {
    next({next: 'login '})
  }
  else{
      next()
    }
  })

export default router
