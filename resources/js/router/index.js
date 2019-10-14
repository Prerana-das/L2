import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import home from '../pages/home.vue'
import about from '../pages/about.vue'
import product from '../pages/product.vue'
import add_product from '../pages/add_product.vue'
import edit_product from '../pages/edit_product.vue'

let Admin = ['Admin'];


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Home',
      }

    },
    {
      path: '/add_product',
      name: 'add_product',
      component: add_product,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'add_product',
      }

    },
    {
      path: '/product/:id',
      name: 'product',
      component: product,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'product',
      }

    },
    {
      path: '/edit_product/:id',
      name: 'edit_product',
      component: edit_product,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'edit_product',
      }

    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'About',
      }

    },
  ],

});
