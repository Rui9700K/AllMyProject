<template>
  <div>
    <h1>当前总和为:{{$store.state.sum}}</h1>
    <select v-model.number="model">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">只有奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return{
      model:1,
    }
  },
  methods:{
    increment(){
      this.$store.dispatch('increment',this.model)  //一般流程
    },
    decrement(){
      this.$store.commit('DECREMENT',this.model)  // 直接通知mutations去操作（简单逻辑可以，一般也是不推荐）
    },
    incrementOdd(){
      this.$store.dispatch('incrementWait',this.model) //业务逻辑写在actions里面
    },
    incrementWait(){
      setTimeout(()=>{
        this.$store.dispatch('increment',this.model) //业务逻辑写在前面（不推荐）
      },500)
    }
  }
};
</script>

<style scoped>
  button {
    margin: 10px 5px auto;
  }
</style>
