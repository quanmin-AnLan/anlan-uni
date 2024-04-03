<template>
  <view class="content">
    <image class="logo" src="http://img.anlan.xyz/game/qmdld.png"></image>
    <view class="text-area">
      <button class="title" @click="push()">{{ title }}</button>
    </view>
    <uni-card title="有建议及反馈可联系开发者">
      <view>2016751527/MissAnlan_Queen</view>
    </uni-card>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '点击前往替身',
    }
  },
  onLoad() {},
  methods: {
    push () {
      this.$Router.push('/pages/skin/index')
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: red;
}
</style>
