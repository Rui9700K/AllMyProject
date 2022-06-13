<template>
<ul class="todo-main">
    <BodyItem 
        v-for="todo in todoObj" 
        :key="todo.id" 
        :todoObj="todo" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    ></BodyItem>
</ul>
</template>

<script>
import BodyItem from './BodyItem';
export default {
    name:"BodyList",
    components:{
        BodyItem,
    },
    props:['todoObj','checkTodo','deleteTodo'],
}
</script>

<style>
/*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>