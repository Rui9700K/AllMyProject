<template>
  <div id="container">
      <h2>学校名：{{name}}</h2>
      <h2>地区：{{address}}</h2>
  </div>
</template>

<script>
//引入消息订阅库
import pubsub from "pubsub-js";
export default {
    name:'SchoolName',
    data() {
        return {
            name:'BUCT',
            address:'北京',
        }
    },
    mounted() {
        const pubid = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('有人发布了hello消息，hello回调被执行了',msgName,data)
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubid)
    }
}
</script>

<style>
    #container {
        background-color:skyblue;
        padding:5px;
    }
</style>