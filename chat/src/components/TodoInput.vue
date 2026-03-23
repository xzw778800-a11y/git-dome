<template>
  <div class="todo-input-wrapper">
    <input 
      type="text" 
      class="todo-input" 
      placeholder="添加新的待办事项..."
      v-model="inputValue"
      @keyup.enter="handleAdd"
    />
    <button class="todo-add-btn" @click="handleAdd">添加</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleAdd() {
      const text = this.inputValue.trim()
      if (text) {
        this.$emit('add', text)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped>
.todo-input-wrapper {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eee;
  gap: 10px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.todo-input:focus {
  border-color: #667eea;
}

.todo-add-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.todo-add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
