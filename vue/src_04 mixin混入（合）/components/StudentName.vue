<template>
  <div id="StudentContainer">
      <h1 v-text="msg"></h1>
      <h2 @click='showName'>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
import mixin from '../mixin';
export default {
    name:'StudentName',
    data() {
        return {
            name:'ZYF',
            msg: '我是一名学生',
            sex:'男'
        }
    },
    mixins:[mixin]
}
</script>

<style>
    #StudentContainer{
        background-color:grey
    }
</style>