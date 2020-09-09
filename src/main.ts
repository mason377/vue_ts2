import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 全局插件（某一个组件或者功能经常需要被使用到）
import "@/plugin/index"

// rem 布局
import "@/utils/rem"

import api from "@/api/api"
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
