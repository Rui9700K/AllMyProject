<template>
    <div>
        <StudentName name="ZYF" :age="22" sex="男"></StudentName>
    </div>
</template>

<script>
//引入
import StudentName from './components/StudentName.vue';

export default {
    name:'App',
    components:{
        StudentName,
    }
}
</script>

<style>

</style>