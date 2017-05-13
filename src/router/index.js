import Vue from 'vue'
import Router from 'vue-router'
import Counter from '../components/Counter'
import child from '../components/children'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Counter,
    children: [{
      path: '/children',
      component: child
    }]
  }]
})
