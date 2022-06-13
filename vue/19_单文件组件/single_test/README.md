# 笔记

## vue.connfig.js配置文件
https://cli.vuejs.org/zh/config/

## ref
    1.用来给元素或子组件注册引用信息（id的替代者）
    2.应用在html标签上获取的是真实dom元素，应用在组件标签上是组件的实例对象（vc）
    3.使用方式：
        打标识：<h1 ref="xxx">...</h1>
        获取：this.$refs.xxx

## props
    三种方法
    功能：让组件接收外部传过来的数据
    (1)•传递数据：
        ‹Demo name="Xxx"/>
    (2)•接收数据：

    第一种方式（只接收）：
        props:["name"]

    第二种方式（限制类型）：
        props:{
        name: String
        }

    第三种方式（限制类型、限制必要性、指定默认值）
        props:{
            name:{
                type:String,//类型
                required:true,//必要性
                default:'老王'//默认值
            }
        }
    备注：props是只读的，vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
        若业务需求确实需要修改。那么请复制props的内容到data中一份，然后去修改data中
        的数据。

## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){....},
                methods:{....},
                ....
            }
        第二步使用混入，例如：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins:['xxx']

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，insta11的第一个参数是Vue,第二个以后的参数是插件使用者传递的参数。
    定义插件：
        对象 instal1 = function (vue, options) {
            //1. 添加全局过滤器
            Vue. filter(....)

            //2.添加全局指今
            Vue.directive(....)

            //3.配置全局混入（合）
            Vue.mixin(....)

            //4.添加实例方法
            Vue.prototype.$myMethod=function () {...}
            Vue.prototype.$myProperty = xxxx
        }
    使用插件：Vue.use()

## css scoped
    只让局部的css代码生效（避免重名）

## 总结TodoList案例

1.组件化编码流程：
    （1静态拆分组件）：组件要按照功能点拆分，命名不要与html元素冲突。
    （2实现动态组件）：考虑好数据的存放位置，数据是一个组件在用还是一些组件在用：
        1.一个组件在用：放自身即可，
        2.一堆组件在用：放在它们的共同父组件上（状态提升），
    （3实现交互）：从绑定事件开始。

2.props适用于：
    （1）.父组件==>子组件 通信
    （2）.子组件==>父组件 通信（要父组件先给子组件一个函数）

3.适用v-model时不可以改变props传过来的值

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但是不推荐这样做

## webStorage
通过 sessionStorage（本次会话，关掉就没了） 和 localStorage（本地存储，手动清空） 实现本地存储

## 全局事件总线：任意组件间通信
适用于任何组件间的通信

new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this //安装事件总线
    }
})

methods(){
    demo(data){...}
}
...
mounted(){
    this.$bus.$on('xxx',this.demo)
}

提供数据：this.$bus.$emit('xxx',数据)

## 消息订阅与发布
1.安装消息订阅与发布的库
    安装pubsub
2.引入 import pubsub from 'pubsub-js'
3.接收数据  pubsub.subscribe('xxx',this.demo)
4.提供数据  pubsub.publish('xxx',数据)
5.最好在beforeDestroy钩子中去取消订阅（设定pid是接收sub的实例对象，通过pid销毁）

## nexTick
this.$nexTick(回调函数)
在下一次DOM更新结束后执行回调

## Vue封装的过渡与动画
在插入/更新/移除 DOM元素时 在合适的时候给元素添加样式类名

v-enter 进入起点 v-enter-to 进入终点 v-enter-active 进入过程中
v-leave 离开起点 v-leave-to 离开终点 v-leave-active 离开过程中

## Vue跨域请求
module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
} 简单配置

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>', //简单地址，如果是全名地址，则请求地址只写到/api即可
        pathRewrite:{'^/api':''}, //重写地址
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}//复杂配置