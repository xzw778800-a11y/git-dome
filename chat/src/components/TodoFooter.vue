<template>
  <div class="todo-footer">
    <span class="todo-count">剩余 {{ remaining }} 项待办</span>
    <button 
      class="todo-clear-btn" 
      :disabled="completedCount === 0"
      @click="$emit('clear-completed')"
    >
      清除已完成 ({{ completedCount }})
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    remaining: {
      type: Number,
      default: 0
    },
    completedCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #fafafa;
}

.todo-count {
  font-size: 14px;
  color: #888;
}

.todo-clear-btn {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  transition: all 0.3s;
}

.todo-clear-btn:hover:not(:disabled) {
  border-color: #ff6b6b;
  color: #ff6b6b;
}

.todo-clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
