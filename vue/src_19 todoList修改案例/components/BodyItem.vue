<template>
<li>
    <label>
    <input type="checkbox" :checked="todoObj.done" @click="handleCheck(todoObj.id)"/>
    <!-- 也能修改内容，但是不建议，因为修改了props -->
    <!-- <input type="checkbox" v-model="todoObj.done"/> -->
    <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
    <input
        type="text"  
        v-show="todoObj.isEdit" 
        :value="todoObj.title" 
        @blur='handleBlur(todoObj,$event)'
        ref="inputTitle"
    >
    </label>
    <button class="btn btn-danger" style="display:none" @click="handleDelete(todoObj.id)">删除</button>
    <button class="btn btn-edit" style="display:none" @click="handleEdit(todoObj)" v-if="!todoObj.isEdit" >编辑</button>
</li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name:"BodyItem",
    //声明接受todoObj对象
    props: ['todoObj'],
    methods:{
        //勾选or取消勾选
        handleCheck(id){
            //通知APP组件将对应的todo对象取反
            this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id){
            if(confirm('确定删除该任务吗？')){
                //通知APP删除id对应事件
                //this.$bus.$emit('deleteTodo',id)
                pubsub.publish('deleteTodo',id)
            }
        },
        //编辑
        handleEdit(todoObj){
            if(todoObj.hasOwnProperty('isEdit')){
                todoObj.isEdit = true
            }else{
                this.$set(todoObj,'isEdit',true)
            }
            this.$nextTick(function(){
                //nextTick函数会在dom渲染完毕后再执行
                this.$refs.inputTitle.focus()
            })
        },
        //失去焦点回调（真正执行修改逻辑）
        handleBlur(todoObj,event){
            todoObj.isEdit = false
            if(!event.target.value.trim()) return alert('输入不能为空')
            const data=[todoObj.id,event.target.value]
            pubsub.publish('updateTodo',data)
        }
    }
}
</script>

<style>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover{
        background-color: rgb(180, 180, 180)
    }

    li:hover button{
        display: block!important;
    }
</style>