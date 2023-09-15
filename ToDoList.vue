// TodoList.vue

<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="添加新任务">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
  },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo']),
    addNewTodo() {
      if (this.newTodo.trim() === '') return;
      this.addTodo(this.newTodo);
      this.newTodo = '';
    },
    removeTodo(index) {
      this.removeTodo(index);
    },
  },
};
</script>
