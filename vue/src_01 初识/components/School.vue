<template>
  <div id="container">
    <h1>学校名称：{{ Name }}</h1>
    <h1>地址：{{ address }}</h1>
    <button @click="showName">提示我学校姓名</button>
  </div>
  <!-- 组件结构 -->
</template>

<script>
//组件交互相关的代码（数据，方法等）
export default {
  name: "School", //最好给组件起个名，和文件名保持一致
  data() {
    //data写成函数式，返回对象
    return {
      Name: "BUCT",
      address: "朝阳",
    };
  },
  methods: {
    showName() {
      alert(this.Name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
#container {
  background-color: orange;
}
</style>