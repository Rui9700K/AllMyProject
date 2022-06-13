<template>
  <div id="container">
      <h1 v-text="msg"></h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>总number:{{num}}</h2>
      <button @click="add">点我number++</button>
      <button @click="sendStudentName">把学生id传给App</button>
      <button @click="unbind">解绑事件</button>
      <button @click="death">销毁当前实例对象</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            msg: '我是一名学生',
            name:'ZYF',
            sex:'男',
            num:0
        }
    },
    methods: {
        sendStudentName(){
            //触发student实例对象组件上的buct事件
            this.$emit('buct',this.name)

            this.$emit('demo')
        },
        unbind(){
            //this.$off('buct')   //参数解绑id
            this.$off()
        },
        death(){
            this.$destroy()//销毁当前组件实例
        },
        add(){
            console.log('我被调用了！')
            this.num++
        }
    }
}
</script>

<style scoped>
    #container {
        background-color:orange;
        padding:5px;
        margin-top:20px ;
    }
</style>