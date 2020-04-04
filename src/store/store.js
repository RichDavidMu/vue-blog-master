import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //变量存储库
  state: {
    token:''
  },
  //通过同步的方法存储
  mutations: {
    //设置vuex的token
    setToken(state,token){
      state.token=token
      localStorage.setItem('token',token)
      console.log(state.token)
    }
  },
})
