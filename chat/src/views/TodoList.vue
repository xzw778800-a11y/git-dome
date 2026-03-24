<template>
  <div class="todo-container">
    <div class="todo-box">
      <TodoHeader />
      <TodoInput @add="handleAddTodo" />
      <TodoFilters :filter="currentFilter" @change="handleFilterChange" />
      <ul class="todo-list">
        <TodoItem 
          v-for="item in filteredTodoList" 
          :key="item.id"
          :text="item.text"
          :completed="item.completed"
          :id="item.id"
          @delete="handleDeleteTodo"
          @toggle="handleToggleTodo"
        />
      </ul>
      <TodoFooter 
        :remaining="remainingCount" 
        :completed-count="completedCount"
        @clear-completed="handleClearCompleted"
      />
    </div>
    <ConfirmDialog 
      :visible="showConfirm"
      title="删除确认"
      message="确定要删除这条待办事项吗？删除后无法恢复。"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
    <ConfirmDialog 
      :visible="showClearConfirm"
      title="清除确认"
      :message="`确定要清除所有已完成的待办事项吗？共 ${completedCount} 项将被删除。`"
      @confirm="confirmClearCompleted"
      @cancel="cancelClearCompleted"
    />
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoFilters from '@/components/TodoFilters.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

export default {
  name: 'TodoList',
  components: {
    TodoHeader,
    TodoInput,
    TodoFilters,
    TodoItem,
    TodoFooter,
    ConfirmDialog
  },
  data() {
    return {
      todoList: [
        { id: 1, text: '学习 Vue.js 基础知识', completed: false },
        { id: 2, text: '完成项目初始化', completed: true },
        { id: 3, text: '编写组件代码', completed: false },
        { id: 4, text: '设计界面样式', completed: true },
        { id: 5, text: '测试功能模块', completed: false }
      ],
      showConfirm: false,
      deleteId: null,
      showClearConfirm: false,
      currentFilter: 'all',
      nextId: 6
    }
  },
  computed: {
    remainingCount() {
      return this.todoList.filter(item => !item.completed).length
    },
    completedCount() {
      return this.todoList.filter(item => item.completed).length
    },
    filteredTodoList() {
      switch (this.currentFilter) {
        case 'active':
          return this.todoList.filter(item => !item.completed)
        case 'completed':
          return this.todoList.filter(item => item.completed)
        default:
          return this.todoList
      }
    }
  },
  methods: {
    handleAddTodo(text) {
      this.todoList.push({
        id: this.nextId++,
        text,
        completed: false
      })
    },
    handleToggleTodo(id) {
      const todo = this.todoList.find(item => item.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    handleFilterChange(filter) {
      this.currentFilter = filter
    },
    handleDeleteTodo(id) {
      this.deleteId = id
      this.showConfirm = true
    },
    confirmDelete() {
      if (this.deleteId !== null) {
        this.todoList = this.todoList.filter(item => item.id !== this.deleteId)
        this.deleteId = null
      }
      this.showConfirm = false
    },
    cancelDelete() {
      this.deleteId = null
      this.showConfirm = false
    },
    handleClearCompleted() {
      if (this.completedCount === 0) return
      this.showClearConfirm = true
    },
    confirmClearCompleted() {
      this.todoList = this.todoList.filter(item => !item.completed)
      this.showClearConfirm = false
    },
    cancelClearCompleted() {
      this.showClearConfirm = false
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
