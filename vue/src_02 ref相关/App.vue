<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">点我弹窗</button>
        <SchoolName></SchoolName>
        <SchoolName></SchoolName>
        <SchoolName></SchoolName>
    </div>
</template>

<script>
//引入
import SchoolName from './components/SchoolName.vue';

export default {
    name:'App',
    data(){
        return{
            msg: '欢迎学习Vue'
        }
    },
    components:{
        SchoolName,
    },
    methods: {
        showDOM: function(){
            alert(this.$refs.title)
        }
    }
}
</script>

<style>

</style>