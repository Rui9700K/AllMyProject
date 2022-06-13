<template>
  <div class="">
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group 
        appear 
        name='animate__animated animate__bounce'
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        >
          <h1 v-if="isShow" key='1'>你好</h1>
          <h1 v-if="isShow" key='2'>你好</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
    name:"Test",
    data(){
        return{
            isShow: true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color:orange;
        transition:0.5s linear
    }
</style>