<template>
  <div id="container">
      <h2>学校名：{{name}}</h2>
      <h2>地区：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
export default {
    name:'SchoolName',
    data() {
        return {
            name:'BUCT',
            address:'北京',
        }
    },
    mounted() {
        console.log('school',this)
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，我收到了data数据',data)
        })
    },
}
</script>

<style>
    #container {
        background-color:skyblue;
        padding:5px;
    }
</style>