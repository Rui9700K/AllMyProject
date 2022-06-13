<template>
  <div id="container">
      <h2>学校名：{{name}}</h2>
      <h2>地区：{{address}}</h2>
      <button @click="sendSchoolName">把学校id传给App</button>
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
    props: ['getSchoolName'],
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style>
    #container {
        background-color:skyblue;
        padding:5px;
    }
</style>