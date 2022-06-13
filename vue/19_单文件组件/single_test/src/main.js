//引入vue
import Vue from 'vue'

//引入App
import App from './App'

Vue.config.productionTip = false

/* const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d */
/* console.log(Vue.prototype) */

//创建实例对象
import vueResource from "vue-resource";

//引入store
import store from './vuex/store';

Vue.use(vueResource)
new Vue({
  el:"#root",
  render:h =>h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
})
