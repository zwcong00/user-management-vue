<template>
  <div class="app-container">
    <div class="header">
      <div class="header-content">
        <div class="logo">
          <el-icon :size="32" color="#409EFF"><User /></el-icon>
          <span class="title">用户管理系统</span>
        </div>
        <div class="header-right">
          <span class="welcome">欢迎回来，管理员</span>
          <el-avatar :size="36" class="avatar">
            <el-icon :size="20"><UserFilled /></el-icon>
          </el-avatar>
        </div>
      </div>
    </div>
    <div class="main-content">
      <UserManagement />
    </div>
    <div class="footer">
      <span>© 2024 用户管理系统 · Powered by Vue 3 + Element Plus</span>
    </div>
  </div>
</template>

<script setup>
import { User, UserFilled } from '@element-plus/icons-vue'
import UserManagement from './views/UserManagement.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 22px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.welcome {
  color: #666;
  font-size: 14px;
}

.avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
}

.main-content {
  flex: 1;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}
</style>
