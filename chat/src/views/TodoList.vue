<template>
  <div class="todo-container">
    <div class="todo-box">
      <TodoHeader />
      <TodoInput @add="handleAddTodo" />
      <TodoFilters />
      <ul class="todo-list">
        <TodoItem 
          v-for="(item, index) in todoList" 
          :key="index"
          :text="item.text"
          :completed="item.completed"
        />
      </ul>
      <TodoFooter :remaining="remainingCount" />
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoFilters from '@/components/TodoFilters.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'TodoList',
  components: {
    TodoHeader,
    TodoInput,
    TodoFilters,
    TodoItem,
    TodoFooter
  },
  data() {
    return {
      todoList: [
        { text: '学习 Vue.js 基础知识', completed: false },
        { text: '完成项目初始化', completed: true },
        { text: '编写组件代码', completed: false },
        { text: '设计界面样式', completed: true },
        { text: '测试功能模块', completed: false }
      ]
    }
  },
  computed: {
    remainingCount() {
      return this.todoList.filter(item => !item.completed).length
    }
  },
  methods: {
    handleAddTodo(text) {
      this.todoList.push({
        text,
        completed: false
      })
    }
  }
}
</script>

<style scoped>
.todo-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
}

.todo-box {
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
