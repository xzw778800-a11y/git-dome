<template>
  <div class="todo-filters">
    <button class="filter-btn active">全部</button>
    <button class="filter-btn">未完成</button>
    <button class="filter-btn">已完成</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFilters'
}
</script>

<style scoped>
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
</style>
