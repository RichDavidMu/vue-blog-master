import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "../admin/login";
import admin from "../admin/admin";
import newBlog from "../admin/newBlog";
import blogList from "../admin/blogList";
import home from "../components/home";
import homeList from "../components/homeList";
import content from "../components/content";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect:'/article',
      children:[
        {
          path: 'article',
          component: homeList
        },
        {
          path: 'content/:id',
          name:'content',
          component: content
        }
      ]
    },
    {
    path: '/login',
      component: login
    },
    {
      path:'/admin',
      component:admin,
      children:[
        {
          path:'new',
          name:'new',
          component:newBlog
        },
        {
          path: 'list',
          name:'list',
          component: blogList
        }
      ]
    }

  ]
})
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
