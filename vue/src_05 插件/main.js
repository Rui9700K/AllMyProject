//引入vue
import Vue from 'vue'

//引入App
import App from './App'

//引入插件
import plugins from './plugins';

Vue.config.productionTip = false

//使用插件
Vue.use(plugins)

//创建实例对象
new Vue({
  el:"#root",
  render:h =>h(App)
})
