// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'


Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.config.productionTip = false

axios.interceptors.response.use(response=>{
      return response
},error => {
  if(error.response.status===401){
    alert('error.response.data')
    localStorage.removeItem('token');
    router.push('/login')
  }
  return Promise.reject(error)
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.token = localStorage.getItem('token')
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
