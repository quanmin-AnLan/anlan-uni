<template>
  <view class="inner-content">
    敬请期待
    <!-- 功能区 -->
    <!-- <el-card class="box-card">
      <view slot="header" class="clearfix">
        <text>模拟强化</text>
      </view>
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(item, index) in tabConfig" :key="index" :label="item.label" :name="item.value">
          <section class="upgrade-box">
            <view class="upgrade-item" v-for="(one, i) in toolData[activeName]" :key="i" @click="openUpgrade(one)">
              <el-image :src="$fn.toWebp(one.cover)"></el-image>
            </view>
          </section>
        </el-tab-pane>
      </el-tabs>
    </el-card> -->
    <!-- 弹窗 -->
    <!-- <upgrade-dialog :visible.sync="dialogVisible" :row="row"></upgrade-dialog> -->
  </view>
</template>

<script>
import apis from '@/api'
// import UpgradeDialog from './components/upgradeDialog.vue'
export default {
  name: 'PenguinFightUpgrade',
  // components: {
  //   UpgradeDialog
  // },
  data() {
    return {
      tabConfig: [
        {
          label: '武器',
          value: 'weapon'
        },
        {
          label: '技能',
          value: 'skill'
        }
      ],
      activeName: 'weapon',
      toolData: {},
      infoData: {},
      row: {},
      dialogVisible: false
    }
  },
  onLoad() {
    this.init()
  },
  methods: {
    init() {
      this.getToolData()
      this.getInfoData()
    },
    getToolData() {
      apis.getToolInfo().then(res => {
        this.toolData = res
      })
    },
    getInfoData() {
      apis.getUpgradeInfo().then(res => {
        this.infoData = res
      })
    },
    openUpgrade(row) {
      let result = row
      result.info = this.infoData[this.activeName][row.type - 1]
      this.row = result
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.box-card {
  text-align: left;
  margin-bottom: 48rpx;
}

.upgrade-box {
  display: flex;
  flex-wrap: wrap;
}

.upgrade-item {
  width: 240rpx;
  height: 240rpx;
  margin: 0 16rpx 16rpx 0;
  cursor: pointer;
}
</style>
