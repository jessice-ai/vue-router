import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' //引入路由器

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //配置路由,这里的 router 可以写成 router:router;
}).$mount('#app')
