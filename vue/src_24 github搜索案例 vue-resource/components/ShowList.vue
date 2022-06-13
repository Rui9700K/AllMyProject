<template>
  <div class="row">
    <!-- 加载用户列表 -->
    <div v-for="user in userlist" :key="user.id" class="card">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 加载欢迎词 -->
    <h1 v-if="isFirst">{{welcome}}</h1>
    <!-- 加载中 -->
    <h1 v-if="isLoading">{{loading}}</h1>
    <!-- 展示错误信息 -->
    <h1 v-if="error">{{error}}</h1>
    <!-- 什么都没搜到 -->
    <h1 v-if="userlist.length===0&&isFirst===false&&isLoading===false">{{blank}}</h1>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "ShowList",
  data() {
    return {
      isFirst:true,
      isLoading:false,
      userlist: [],
      welcome:"welcome~",
      loading:"loading...",
      blank:"Not Found Anything QAQ",
      error:"",
    };
  },
  mounted() {
    /* 获取用户列表 */
    const getUsersList = pubsub.subscribe(
      "sendUsersList",
      (msgName, data) => {
        console.log('收到数据了')
        this.userlist = data;
        console.log(this.userlist.length)
      }
    );
    /* 判断是否按下搜索按钮 将欢迎页面置为false*/
    const getPress = pubsub.subscribe(
      "sendPress",
      (msgName,data) =>{
        this.isFirst = false
      }
    );
    /* 判断是否正在搜索 */
    const getLoading = pubsub.subscribe(
      "sendLoading",
      (msgName,data) =>{
        this.isLoading = data
      }
    );
    /* 获取错误信息 */
    const getError = pubsub.subscribe(
      "sendError",
      (msgName,data) =>{
        this.error = data
      }
    );

  },
  beforeDestroy() {
    pubsub.unsubscribe(this.getUsersList);
    pubsub.unsubscribe(this.getPress);
    pubsub.unsubscribe(this.getLoading);
    pubsub.unsubscribe(this.getError);
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>