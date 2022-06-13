<template>
  <div id="StudentContainer">
      <h1 v-text="msg"></h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            msg: '我是一名学生',
        }
    },

    /* props:['name','sex','age'] */ //简单接收

    //接受的同时对类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String,
    } */

    //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,    //name类型
            required:true,  //name是必要的
        },
        age: {
            type:Number,
            default:99,
        },
        sex:{
            type:String,
            required:true,
        }
    }
}
</script>

<style>
    #StudentContainer{
        background-color:grey
    }
</style>