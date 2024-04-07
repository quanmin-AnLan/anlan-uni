<template>
  <view class="content">
    <image class="logo" src="http://img.anlan.xyz/anlan/dark-logo.png"></image>
    <view class="button-area">
      <al-button text="替身升星" @click="push('skin')"></al-button>
      <al-button text="模拟强化" @click="push('upgrade')"></al-button>
    </view>
    <uni-card title="有建议及反馈可联系开发者">
      <view>2016751527/MissAnlan_Queen</view>
    </uni-card>
  </view>
</template>

<script>
import AlButton from '@/components/AlButton/index.vue'
export default {
  data() {
    return {}
  },
  onLoad() {},
  onShareAppMessage () {
    return {
      title: 'Anlan工具箱',
      path: 'pages/index/index',
      imageUrl: 'http://img.anlan.xyz/anlan.jpg'
    }
  },
  onShareTimeline () {
    return {
      title: 'Anlan工具箱',
      path: 'pages/index/index',
      imageUrl: 'http://img.anlan.xyz/anlan.jpg'
    }
  },
  methods: {
    push (route) {
      this.$Router.replace(`/pages/${route}/index`)
    }
  },
  components: {
    AlButton
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom, #000000, #434343);
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 120rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60rpx;
}

.button-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 420rpx;
  margin-bottom: 60rpx;
}
</style>
