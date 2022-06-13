<template>
    <div id="app">
        <h1>{{msg}},{{studentName}}</h1>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- <StudentName v-on:buct='getStudentName'></StudentName> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(使用ref) -->
        <StudentName ref="student" @demo='m1'></StudentName>
        <hr />
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <SchoolName :getSchoolName="getSchoolName"></SchoolName>
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
            studentName:''
        }
    },
    methods:{
        getSchoolName(name){
            console.log('App收到了学校名：',name)
        },
        getStudentName(name,...params){
            console.log('App收到了学生名：',name)
            this.studentName = name
        },
        m1(){
            console.log('我被调用了')
        }
    },
    mounted(){
        this.$refs.student.$on('buct',this.getStudentName)
    },
}
</script>

<style>
#app{
    background-color:rgb(59, 59, 59);
    padding: 5px;
}
</style>