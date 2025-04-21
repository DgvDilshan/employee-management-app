import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/main.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
