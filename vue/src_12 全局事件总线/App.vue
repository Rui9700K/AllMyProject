<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <SchoolName></SchoolName>
        <StudentName></StudentName>
    </div>
</template>

<script>
//引入
import StudentName from './components/StudentName.vue';
import SchoolName from './components/SchoolName.vue'

export default {
    name:'App',
    components:{
        StudentName,
        SchoolName,
    },
    data() {
        return {
            msg:"你好",
        }
    }
}
</script>

<style>
#app{
    background-color:rgb(59, 59, 59);
    padding: 5px;
}
</style>