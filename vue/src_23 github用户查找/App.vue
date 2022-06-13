<template>
  <div class="container">
    <SearchTable></SearchTable>
    <ShowList></ShowList>
  </div>
</template> 

<script>
//引入
import axios from "axios";
import SearchTable from "./components/SearchTable.vue";
import ShowList from "./components/ShowList.vue";
export default {
  name: "App",
  components: {
    SearchTable,
    ShowList,
  },
};
</script>

<style>
</style>