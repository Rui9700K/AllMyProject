<template>
  <div>
    <h1>当前总和为:{{sum}}</h1>
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
      sum: 0,
    }
  },
  methods:{
    increment(){
      this.sum = this.sum + this.model
    },
    decrement(){
      this.sum = this.sum - this.model
    },
    incrementOdd(){
      if(this.sum % 2 !== 0){
        this.sum += this.model
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum = this.sum + this.model
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
