<template>
  <view class="user-page">
    <!-- 用户信息头部 -->
    <view class="user-header">
      <view class="user-header-bg"></view>
      <view class="user-info">
        <view class="avatar-container">
          <image class="avatar" src="/static/avatar.png" mode="aspectFill"></image>
        </view>
        <view class="user-details">
          <text class="username">好奇怪的小c</text>
          <view class="user-stats">
            <text class="stats-item">收藏 42</text>
            <text class="stats-item">关注 18</text>
          </view>
        </view>
        <view class="settings-btn">
          <text class="settings-icon">⚙️</text>
        </view>
      </view>
    </view>

    <!-- 我的收藏 -->
    <view class="section">
      <view class="section-header">
        <text class="section-title">我的收藏</text>
        <view class="more-btn" @click="viewMore('collection')">
          <text class="more-text">查看更多</text>
          <text class="arrow">›</text>
        </view>
      </view>
      <scroll-view class="collection-scroll" scroll-x>
        <view class="collection-list">
          <view v-for="(item, index) in collections" :key="index" class="collection-item">
            <image :src="item.image" class="collection-image" mode="aspectFill"></image>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 我的功能 -->
    <view class="section">
      <view class="section-header">
        <text class="section-title">我的功能</text>
      </view>
      <view class="function-grid">
        <view
          v-for="(item, index) in functions"
          :key="index"
          class="function-item"
          @click="handleFunction(item.type)"
        >
          <view class="function-icon">
            <text class="icon">{{ item.icon }}</text>
          </view>
          <text class="function-title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <!-- 更多推荐 -->
    <view class="section">
      <view class="section-header">
        <text class="section-title">更多推荐</text>
      </view>
      <view class="recommend-grid">
        <view
          v-for="(item, index) in recommendations"
          :key="index"
          class="recommend-item"
          @click="handleRecommend(item.type)"
        >
          <view class="recommend-icon">
            <text class="icon">{{ item.icon }}</text>
          </view>
          <text class="recommend-title">{{ item.title }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface CollectionItem {
  image: string;
}

interface FunctionItem {
  icon: string;
  title: string;
  type: string;
}

interface RecommendItem {
  icon: string;
  title: string;
  type: string;
}

// 收藏数据
const collections = ref<CollectionItem[]>([
  { image: '/static/food1.jpg' },
  { image: '/static/food2.jpg' },
  { image: '/static/food3.jpg' },
  { image: '/static/food4.jpg' },
]);

// 功能数据
const functions = ref<FunctionItem[]>([
  { icon: '🎧', title: '客服中心', type: 'service' },
  { icon: '📍', title: '我的地址', type: 'address' },
  { icon: '💬', title: '我的评价', type: 'review' },
  { icon: '📄', title: '发票助手', type: 'invoice' },
  { icon: '🏢', title: '企业用餐', type: 'enterprise' },
  { icon: '🍴', title: '餐具设置', type: 'tableware' },
]);

// 推荐数据
const recommendations = ref<RecommendItem[]>([
  { icon: '🎁', title: '邀请有奖', type: 'invite' },
  { icon: '🧁', title: '商家入驻', type: 'merchant' },
  { icon: '🐻', title: '浣熊食堂招商', type: 'recruit' },
]);

// 事件处理
const viewMore = (type: string) => {
  console.log('查看更多:', type);
  // 实现查看更多逻辑
};

const handleFunction = (type: string) => {
  console.log('功能点击:', type);
  // 实现功能跳转逻辑
};

const handleRecommend = (type: string) => {
  console.log('推荐点击:', type);
  // 实现推荐跳转逻辑
};
</script>

<style scoped lang="scss">
.user-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-bottom: 20rpx;
}

// 用户头部
.user-header {
  position: relative;
  padding: 60rpx 30rpx 40rpx;
  overflow: hidden;

  .user-header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(10px);
  }

  .user-info {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2;

    .avatar-container {
      margin-right: 24rpx;

      .avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 60rpx;
        border: 4rpx solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
      }
    }

    .user-details {
      flex: 1;

      .username {
        font-size: 36rpx;
        font-weight: 600;
        color: white;
        display: block;
        margin-bottom: 12rpx;
        text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
      }

      .user-stats {
        display: flex;
        gap: 24rpx;

        .stats-item {
          font-size: 28rpx;
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }

    .settings-btn {
      padding: 12rpx;
      border-radius: 20rpx;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);

      .settings-icon {
        font-size: 32rpx;
      }
    }
  }
}

// 通用区域样式
.section {
  margin: 30rpx 30rpx 0;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: 600;
      color: white;
      text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
    }

    .more-btn {
      display: flex;
      align-items: center;
      gap: 8rpx;
      padding: 8rpx 16rpx;
      border-radius: 20rpx;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);

      .more-text {
        font-size: 24rpx;
        color: white;
      }

      .arrow {
        font-size: 28rpx;
        color: white;
        font-weight: bold;
      }
    }
  }
}

// 收藏区域
.collection-scroll {
  white-space: nowrap;

  .collection-list {
    display: flex;
    gap: 20rpx;
    padding: 0 10rpx;

    .collection-item {
      flex-shrink: 0;
      width: 200rpx;
      height: 150rpx;
      border-radius: 20rpx;
      overflow: hidden;
      box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
      background: white;

      .collection-image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

// 功能网格
.function-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
  padding: 30rpx;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24rpx;
  backdrop-filter: blur(20px);
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);

  .function-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24rpx 12rpx;
    border-radius: 16rpx;
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.95);
      background: linear-gradient(135deg, #e8f2ff 0%, #d8e8ff 100%);
    }

    .function-icon {
      width: 80rpx;
      height: 80rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20rpx;
      margin-bottom: 16rpx;
      box-shadow: 0 4rpx 16rpx rgba(102, 126, 234, 0.3);

      .icon {
        font-size: 32rpx;
      }
    }

    .function-title {
      font-size: 26rpx;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
  }
}

// 推荐网格
.recommend-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
  padding: 30rpx;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24rpx;
  backdrop-filter: blur(20px);
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);

  .recommend-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24rpx 12rpx;
    border-radius: 16rpx;
    background: linear-gradient(135deg, #fff8e1 0%, #ffe8a1 100%);
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.95);
      background: linear-gradient(135deg, #ffe8a1 0%, #ffd54f 100%);
    }

    .recommend-icon {
      width: 80rpx;
      height: 80rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
      border-radius: 20rpx;
      margin-bottom: 16rpx;
      box-shadow: 0 4rpx 16rpx rgba(255, 152, 0, 0.3);

      .icon {
        font-size: 32rpx;
      }
    }

    .recommend-title {
      font-size: 26rpx;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
  }
}

// 响应式设计
@media (min-width: 768px) {
  .user-page {
    max-width: 750rpx;
    margin: 0 auto;
  }

  .function-grid,
  .recommend-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .function-grid,
  .recommend-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

// 过渡动画
.section {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 磨砂玻璃效果
.function-grid,
.recommend-grid {
  border: 1rpx solid rgba(255, 255, 255, 0.2);
}

// 悬浮效果
.function-item,
.recommend-item,
.collection-item {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4rpx);
    box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.15);
  }
}
</style>
