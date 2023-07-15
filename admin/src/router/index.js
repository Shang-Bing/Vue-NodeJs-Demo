import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import NotFound from '../views/notfound/NotFound.vue'
import ConfigRoutes from '../router/config'
import store from '@/store'




const routes = [
  {
    path:"/",
    redirect:"/index"
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/mainbox",
    name:"mainbox",
    component:MainBox
  },
  {
    path:"/:pathMatch(.*)*",
    name:"NotFound",
    component:NotFound
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to,from,next) =>{
  if(to.name === "login"){
    next()
  }else{
    // 如果授权已经登录过了，执行next（）可执行路由跳转
    // 否则，重定向到login
    if(!localStorage.getItem("token")){
      next({
        path:"login"
      })
    }else{
      if(!store.state.isGetterRouter){
        // 动态路由
        ConfigRoutes.forEach(item=>router.addRoute("mainbox",item))
        store.commit("changeGetterRouter",true)//第一次登录-》非第一次登录
        next({
          path:to.fullPath
        })
      }else{
        next()
      }
      
    }
  }
})





export default router
