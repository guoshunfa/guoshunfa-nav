<template>
  <div class="search-bar">
    <div class="search-input-wrapper">
      <div class="search-icon">
        <i class="el-icon-search"></i>
      </div>
      <input 
        v-model="searchText" 
        type="text" 
        :placeholder="placeholder"
        @keyup.enter="handleSearch"
      >
      <div class="search-engines">
        <div 
          v-for="engine in searchEngines" 
          :key="engine.name"
          class="engine-item"
          :class="{ active: currentEngine === engine.name }"
          @click="currentEngine = engine.name"
        >
          {{ engine.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchEngines = [
  { name: 'google', label: 'Google', url: 'https://www.google.com/search?q=' },
  { name: 'baidu', label: '百度', url: 'https://www.baidu.com/s?wd=' }
]

const currentEngine = ref('google')
const searchText = ref('')

const placeholder = computed(() => {
  return currentEngine.value === 'google' ? '使用 Google 搜索...' : '使用百度搜索...'
})

const handleSearch = () => {
  if (!searchText.value.trim()) return
  
  const engine = searchEngines.find(e => e.name === currentEngine.value)
  if (engine) {
    window.open(engine.url + encodeURIComponent(searchText.value), '_blank')
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 8px;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.15),
      0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:focus-within {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.search-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 8px 12px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 400;
  letter-spacing: 0.5px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
}

.search-engines {
  display: flex;
  gap: 8px;
  padding: 0 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  margin-left: 12px;
}

.engine-item {
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
}
</style>