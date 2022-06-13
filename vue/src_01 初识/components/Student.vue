<template>
  <div id="Studentcontainer">
    <h2>学生姓名：{{ Name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
  <!-- 组件结构 -->
</template>

<script>
//组件交互相关的代码（数据，方法等）
export default {
  name: "Student",
  data() {
    return {
      Name: "周扬帆",
      age: 22,
    };
  },
};
</script>

<style>
/* 组件的样式 */
#Studentcontainer {
  background-color: rgb(0, 68, 255);
}
</style>