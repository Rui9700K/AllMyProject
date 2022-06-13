<template>
  <div class="">
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name='hello' appear>
          <h1 v-if="isShow">你好</h1>
          <h1 v-if="isShow">你好</h1>
      </transition>
  </div>
</template>

<script>
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
        background-color:orange
    }

    .hello-enter-active{
        animation: atguigu 0.5s linear;
    }

    .hello-leave-active{
        animation: atguigu 0.5s linear reverse;
    }

    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
</style>