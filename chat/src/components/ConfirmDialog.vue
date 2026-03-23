<template>
  <div class="confirm-overlay" v-if="visible" @click.self="handleCancel">
    <div class="confirm-dialog">
      <div class="confirm-icon">
        <svg viewBox="0 0 24 24" width="48" height="48">
          <circle cx="12" cy="12" r="10" fill="#fff3e0" />
          <path d="M12 8v4m0 4h.01" stroke="#ff9800" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <h3 class="confirm-title">{{ title }}</h3>
      <p class="confirm-message">{{ message }}</p>
      <div class="confirm-buttons">
        <button class="confirm-btn cancel" @click="handleCancel">取消</button>
        <button class="confirm-btn confirm" @click="handleConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '确认操作'
    },
    message: {
      type: String,
      default: '确定要执行此操作吗？'
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm')
    },
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.confirm-dialog {
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  min-width: 320px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.confirm-icon {
  margin-bottom: 16px;
}

.confirm-title {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.confirm-message {
  margin: 0 0 24px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.confirm-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.confirm-btn {
  padding: 10px 28px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.confirm-btn.cancel {
  background: #f5f5f5;
  color: #666;
}

.confirm-btn.cancel:hover {
  background: #e0e0e0;
}

.confirm-btn.confirm {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%);
  color: #fff;
}

.confirm-btn.confirm:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}
</style>
