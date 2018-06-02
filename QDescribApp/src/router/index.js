import Vue from 'vue'
import VueRouter from 'vue-router'
import {isAuth} from '../../shared/';

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})


Router.beforeEach((to,from,next)=>{
  let {requiresAuth}=to.meta;
  const token = localStorage.getItem('token');
  console.log(token);
  
  console.log(`REQUIRES AUTH -> ${requiresAuth}`);
  console.log(isAuth(token));
  if(requiresAuth){
    
    if(isAuth(token).isValid) return next();
    else return next('/');
  }else{
    if(isAuth(token).isValid) return next('/dashboard');
    return next();
  }
  

})


export default Router
