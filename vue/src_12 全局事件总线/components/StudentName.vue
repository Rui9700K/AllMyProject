<template>
  <div id="container">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生姓名给school组件</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            name:'ZYF',
            sex:'男',
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',666)
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