<template>
  <div class="todo-container">
    <div class="todo-box">
      <h1 class="todo-title">Todo List</h1>
      
      <div class="todo-input-wrapper">
        <input 
          type="text" 
          class="todo-input" 
          placeholder="添加新的待办事项..."
        />
        <button class="todo-add-btn">添加</button>
      </div>

      <div class="todo-filters">
        <button class="filter-btn active">全部</button>
        <button class="filter-btn">未完成</button>
        <button class="filter-btn">已完成</button>
      </div>

      <ul class="todo-list">
        <li class="todo-item">
          <div class="todo-item-left">
            <input type="checkbox" class="todo-checkbox" />
            <span class="todo-text">学习 Vue.js 基础知识</span>
          </div>
          <button class="todo-delete-btn">删除</button>
        </li>
        
        <li class="todo-item completed">
          <div class="todo-item-left">
            <input type="checkbox" class="todo-checkbox" checked />
            <span class="todo-text">完成项目初始化</span>
          </div>
          <button class="todo-delete-btn">删除</button>
        </li>
        
        <li class="todo-item">
          <div class="todo-item-left">
            <input type="checkbox" class="todo-checkbox" />
            <span class="todo-text">编写组件代码</span>
          </div>
          <button class="todo-delete-btn">删除</button>
        </li>
        
        <li class="todo-item completed">
          <div class="todo-item-left">
            <input type="checkbox" class="todo-checkbox" checked />
            <span class="todo-text">设计界面样式</span>
          </div>
          <button class="todo-delete-btn">删除</button>
        </li>
        
        <li class="todo-item">
          <div class="todo-item-left">
            <input type="checkbox" class="todo-checkbox" />
            <span class="todo-text">测试功能模块</span>
          </div>
          <button class="todo-delete-btn">删除</button>
        </li>
      </ul>

      <div class="todo-footer">
        <span class="todo-count">剩余 3 项待办</span>
        <button class="todo-clear-btn">清除已完成</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {}
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

.todo-title {
  margin: 0;
  padding: 30px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

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

.todo-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.filter-btn {
  padding: 8px 16px;
  background: #f5f5f5;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: #e0e0e0;
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

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

.todo-clear-btn:hover {
  border-color: #ff6b6b;
  color: #ff6b6b;
}
</style>
