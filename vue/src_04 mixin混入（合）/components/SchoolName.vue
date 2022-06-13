<template>
  <div id="StudentContainer">
      <h2 @click='showName'>学校名：{{name}}</h2>
      <h2>地区：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import mixin from '../mixin';
export default {
    name:'SchoolName',
    data() {
        return {
            name:'BUCT',
            address:'北京',
        }
    },
    methods:{
        showName(){
            alert(this.name)
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