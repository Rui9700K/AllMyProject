//引入vue
import Vue from 'vue'

//引入App
import App from './App'

Vue.config.productionTip = false

//创建实例对象
new Vue({
  el:"#root",
  render:h =>h(App)
})