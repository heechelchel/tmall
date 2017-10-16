// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Header from './components/Header'
Vue.component(Header.name,Header)
import Swiper from './components/Swiper'
Vue.component(Swiper.name, Swiper);
import Entrance from './components/Entrance'
Vue.component(Entrance.name, Entrance);

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
