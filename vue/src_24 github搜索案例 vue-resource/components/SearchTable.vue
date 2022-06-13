<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
          @keyup.enter="searchUsers"
        />&nbsp;<button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
import axios from 'axios';
export default {
  name: "SearchTable",
  data() {
    return {
      keyWord:''
    }
  },
  methods:{
    searchUsers(){
      //告知点下按钮了
      pubsub.publish('sendPress',false)

      //告知用户请等待
      pubsub.publish('sendLoading',true)

      //发送请求
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          pubsub.publish('sendLoading',false)
          console.log('成功了',response.data.items);
          pubsub.publish('sendUsersList',response.data.items)
        },
        error => {
          pubsub.publish('sendLoading',false)
          console.log('失败了',error.message)
          pubsub.publish('sendError',error.message)
        }
      )
    }
  },
};
</script>

<style scoped>

</style>