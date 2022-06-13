<template>
<div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取车辆信息</button>
    <h4>学生信息：{{dataStudent[0]}}</h4>
    <h4>车辆信息：{{dataCars[0]}}</h4>
</div>
</template> 

<script>
//引入
import axios from 'axios'
export default {
    name:'App',
    data(){
        return{
            dataStudent:[],
            dataCars:[],
        }
    },
    methods:{
        getStudents(){
            axios.get('http://localhost:8080/test1').then(
                response => {
                    console.log('请求成功了',response.data)
                    this.dataStudent = response.data
                },
                error => {
                    console.log('请求失败了',error.message)
                }
            )
        },
        getCars(){
            axios.get('http://localhost:8080/test2').then(
                response => {
                    console.log('请求成功了',response.data)
                    this.dataCars = response.data
                },
                error => {
                    console.log('请求失败了',error.message)
                }
            )
        }
    }
}
</script>