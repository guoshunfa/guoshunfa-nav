<template>
  <div class="home">
    <!-- 左侧边栏 -->
    <div class="sidebar">
      <a href="https://www.guoshunfa.com" target="_blank" class="logo">
        <img src="/images/logo.jpg" alt="Logo">
        郭顺发<br>
      </a>
      <nav class="nav-menu">
        <div 
          v-for="(group, index) in toolGroups" 
          :key="index"
          class="nav-item"
          :class="{ active: currentGroup === index }"
          @click="scrollToGroup(index)"
        >
          {{ index }}
        </div>
      </nav>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content" ref="contentRef">
      <!-- 顶部区域 -->
      <div class="top-section">
        <!-- 时间日期 -->
        <div class="datetime">
          <div class="time">{{ currentTime }}</div>
          <div class="date">{{ currentDate }}</div>
        </div>
        
        <!-- 搜索栏 -->
        <SearchBar class="search-section" />
      </div>
      
      <!-- 工具卡片网格 -->
      <div class="tools-container">
        <div 
          v-for="(group, groupName) in toolGroups" 
          :key="groupName"
          class="tool-group"
          :ref="el => { if (el) groupRefs[groupName] = el }"
        >
          <h2 class="group-title">{{ groupName }}</h2>
          <div class="tool-grid">
            <a 
              v-for="tool in group" 
              :key="tool.name"
              :href="tool.link"
              target="_blank"
              class="tool-card"
              :title="tool.desc"
            >
              <div class="tool-icon">
                <img 
                  :src="getFaviconUrl(tool.link)" 
                  :alt="tool.name"
                  @error="handleImageError"
                >
              </div>
              <div class="tool-name">{{ tool.name }}</div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 底部文字 -->
      <div class="footer-text">
        郭顺发的导航页
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { toolGroups } from '../data/toolGroups'
import SearchBar from '../components/SearchBar.vue'

const contentRef = ref<HTMLElement | null>(null)
const currentGroup = ref('')
const groupRefs = reactive<{ [key: string]: HTMLElement }>({})
const currentTime = ref('')
const currentDate = ref('')

const getFaviconUrl = (url: string) => {
  try {
    const hostname = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
  } catch {
    return ''
  }
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  const name = target.alt || ''
  target.style.display = 'none'
  const parent = target.parentElement
  if (parent) {
    const textIcon = document.createElement('div')
    textIcon.className = 'text-icon'
    textIcon.textContent = name.slice(0, 2)
    parent.appendChild(textIcon)
  }
}

const scrollToGroup = (groupName: string) => {
  const element = groupRefs[groupName]
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const updateCurrentGroup = () => {
  if (!contentRef.value) return
  
  const scrollPosition = contentRef.value.scrollTop
  for (const [groupName, element] of Object.entries(groupRefs)) {
    const { top } = element.getBoundingClientRect()
    if (top <= 100) {
      currentGroup.value = groupName
    }
  }
}

const updateDateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('zh-CN', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  currentDate.value = now.toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
}

onMounted(() => {
  if (contentRef.value) {
    contentRef.value.addEventListener('scroll', updateCurrentGroup)
  }
  
  // 初始化时间并每秒更新
  updateDateTime()
  setInterval(updateDateTime, 1000)
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  background: url('/images/bg.jpg') center/cover no-repeat;
  color: #fff;
}

.sidebar {
  width: 80px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: 8px;
      object-fit: cover;
    }
  }
}

.nav-menu {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  
  .nav-item {
    padding: 16px 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
    text-align: center;
    font-size: 13px;
    
    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }
    
    &.active {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

.main-content {
  flex: 1;
  padding: 20px 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.top-section {
  text-align: center;
  margin-bottom: 20px;
}

.datetime {
  margin-bottom: 15px;
  
  .time {
    font-size: 72px;
    font-weight: 200;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.5),
      0 8px 24px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    letter-spacing: 4px;
  }
  
  .date {
    font-size: 16px;
    color: #ffffff;
    margin-top: 4px;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 4px 8px rgba(0, 0, 0, 0.2);
    letter-spacing: 2px;
    font-weight: 300;
  }
}

.search-section {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.tools-container {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}

.tool-group {
  margin-bottom: 40px;
  
  .group-title {
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
}

.tool-card {
  background: transparent;
  padding: 8px 4px;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  border-radius: 12px;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .tool-icon {
    width: 36px;
    height: 36px;
    margin: 0 auto 6px;
    position: relative;
    background: #ffffff;
    border-radius: 12px;
    padding: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 8px;
    }
    
    .text-icon {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #333;
      font-weight: 500;
      text-shadow: none;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  
  .tool-name {
    font-size: 12px;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 28px;
  }
  
  .tool-desc {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

.footer-text {
  text-align: center;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style> 