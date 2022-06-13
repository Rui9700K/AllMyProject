<template>
    <div>
        <StudentName></StudentName>
        <hr />
        <SchoolName></SchoolName>
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
    }
}
</script>

<style>

</style>