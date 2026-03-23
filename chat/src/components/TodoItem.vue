<template>
  <li class="todo-item" :class="{ completed: completed }">
    <div class="todo-item-left">
      <input type="checkbox" class="todo-checkbox" :checked="completed" />
      <span class="todo-text" :title="text">{{ text }}</span>
    </div>
    <button class="todo-delete-btn" @click="handleDelete">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    text: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background: #fafafa;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.todo-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #667eea;
}

.todo-text {
  font-size: 16px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
  display: inline-block;
}

.todo-delete-btn {
  padding: 6px 12px;
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, background-color 0.3s;
}

.todo-item:hover .todo-delete-btn {
  opacity: 1;
}

.todo-delete-btn:hover {
  background: #ee5a5a;
}
</style>
