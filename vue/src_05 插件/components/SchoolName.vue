<template>
  <div id="StudentContainer">
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
}
</script>

<style>
    #StudentContainer{
        background-color:grey
    }
</style>