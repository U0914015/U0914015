// main.js

import Vue from 'vue';
import App from './App.vue';
import store from './store'; // 引入 Vuex Store

new Vue({
  render: (h) => h(App),
  store, // 将 Vuex Store 注入根实例
}).$mount('#app');
