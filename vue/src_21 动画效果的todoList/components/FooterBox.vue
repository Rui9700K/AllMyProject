<template>
  <div class="todo-footer" v-show="totalTodos">
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ totalTodos }}
    </span>
    <button class="btn btn-danger" @click="done">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "FooterBox",
  props: ["todoObj", "deleteDone"],
  computed: {
    totalTodos() {
      return this.todoObj.length;
    },

    doneTotal() {
      return this.todoObj.filter((todo) => {
        return todo.done === true;
      }).length;
    },

    isAll() {
      return this.doneTotal === this.totalTodos;
    },
  },
  methods: {
    done() {
      if (this.doneTotal != 0) {
        this.$emit("deleteDone");
      } else {
        alert("你根本没完成任何事件！");
      }
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>