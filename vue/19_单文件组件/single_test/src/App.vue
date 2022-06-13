<template>
  <div>
    <Count></Count>
  </div>
</template> 

<script>
//引入
import axios from "axios";
import Count from "./components/Count.vue";

export default {
  name: "App",
  components: {
    Count,
  },
};
</script>