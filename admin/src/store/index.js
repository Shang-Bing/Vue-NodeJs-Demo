import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
  state: {
    isGetterRouter:false,//是否第一次登录
    isCollapsed:false//侧边导航是否折叠
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value){
      state.isGetterRouter = value
    },
    // 控制侧边栏展开
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
  },
  // 持久化
  plugins: [createPersistedState({
    paths:["isCollapsed"]
  })],
})
