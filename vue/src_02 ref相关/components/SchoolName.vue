<template>
  <div id="schoolContainer">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
        return {
            name:"BUCT",
            address:"朝阳"
        }
    },
}
</script>

<style>
    #schoolContainer{
        background-color:grey
    }
</style>