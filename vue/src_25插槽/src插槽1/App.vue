<template>
  <div class="container">
    <Category title="食物" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </Category>
    <Category title="游戏" :listData="games"></Category>
    <Category title="电影" :listData="films">
      <video controls src = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template> 

<script>
//引入
import axios from "axios";
import Category from './components/Category.vue';

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods:['火锅','烧烤','牛排','小龙虾'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》'],
    }
  }
};
</script>

<style>
  .container {
    display: flex;
    justify-content:space-around;
  }
</style>