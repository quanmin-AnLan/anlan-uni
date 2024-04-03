<template>
  <view class="inner-content">
    <!-- 功能区 -->
    <uni-card title="数据展示" class="box-card">
      <uni-segmented-control :current="active" :values="tabConfig" @clickItem="tabChange"></uni-segmented-control>
      <view class="select-box">
        <view class="select-name">属性筛选：</view>
        <uni-data-select v-model="selectActive" :localdata="selectConfig[active]" class="select-container"></uni-data-select>
      </view>
      <view class="upgrade-box">
        <view class="upgrade-item" v-for="(one, i) in washSkinData" :key="i" @click="openDialog(one)">
          <image :src="$fn.toWebp(one.img)"></image>
        </view>
      </view>
    </uni-card>
    <!-- 弹窗 -->
    <skin-dialog v-model="dialogVisible" :row="row"></skin-dialog>
  </view>
</template>

<script>
import apis from '@/api'
import SkinDialog from './components/SkinDialog.vue'
import { selectConfig } from './config'
export default {
  name: 'PenguinFightSkin',
  components: {
    SkinDialog
  },
  data() {
    return {
      tabConfig: ['人物替身', '武器幻化'],
      active: 0,
      skinData: {},
      row: {},
      dialogVisible: false,
      selectActive: '全部',
      selectConfig,
      show: false
    }
  },
  computed: {
    washSkinData () {
      const baseData = JSON.parse(JSON.stringify(this.skinData))
      const keyMap = {0: 'role', 1: 'weapon'}
      const activeData = baseData[keyMap[this.active]]
      console.log(activeData, keyMap[this.active], 111)
      let data = []
      if (this.selectActive !== '全部' && data) {
        for (const item of activeData) {
          const info = item.info
          for (const i in info) {
            const infoItem = info[i]
            const str = infoItem.join(',')
            if (str.includes(this.selectActive) && !data.includes(item)) {
              if (this.selectActive === '暴击' && (str.includes('抗暴击') || str.includes('暴击伤害'))) {
                // console.log('属性不对');
              } else if (this.selectActive === '伤害减免' && str.includes('最终伤害减免')) {
                // console.log('属性不对');
              } else if (this.selectActive === '眩晕几率' && str.includes('抗眩晕几率')) {
                // console.log('属性不对');
              } else if (this.selectActive === '抵挡' && (str.includes('抵挡穿透') || str.includes('抵挡减伤'))) {
                // console.log('属性不对');
              } else if (this.selectActive === '穿透' && str.includes('抵挡穿透')) {
                // console.log('属性不对');
              } else {
                data.push(item)
              }
            }
          }
        }
      } else {
        data = activeData
      }
      return data
    }
  },
  onLoad () {
    console.log('onload')
    this.init()
  },
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
    init () {
      this.getSkinData()
    },
    getSkinData () {
      apis.getSkinInfo().then(res => {
        this.skinData = res.data
      })
    },
    openDialog (row) {
      let result = row
      this.row = result
      this.dialogVisible = true
    },
    tabChange (e) {
      if (this.active !== e.currentIndex) {
        this.active = e.currentIndex;
      }
      this.selectActive = '全部'
    }
  }
}
</script>

<style lang="less" scoped>
.box-card {
  text-align: left;
  margin-bottom: 24rpx;
}

.upgrade-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.upgrade-item {
  width: 140rpx;
  height: 140rpx;
  margin: 0 8rpx 8rpx 0;
  cursor: pointer;
  image {
    width: 100%;
    height: 100%;
  }
}

.select-container {
  margin: 10rpx 0 20rpx
}
</style>
