/**
 * Created by Kaiser on 2017/3/27.
 */
import Vue from 'vue'
import router from './router/index'
import store from './stores/index'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store
})
