<template>
  <div id="StudentContainer">
      <h1 v-text="msg"></h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            msg: '我是一名学生',
            name:'ZYF',
            sex:'男'
        }
    },
}
</script>

<style>
    #StudentContainer{
        background-color:grey
    }
</style>