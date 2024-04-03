<template>
  <uni-card v-if="modelValue" class="skin-dialog">
    <view class="title">{{ row.name }} - 属性展示</view>
    <view>
      <uni-segmented-control :current="active" :values="tabConfig" @clickItem="tabChange"></uni-segmented-control>
      <view class="skin-content" v-if="row.info">
        <view v-for="(one, i) in row.info[active + 1]" :key="i">
          {{ one }}
        </view>
      </view>
    </view>
    <view class="dialog-footer">
      <button @click="handleCancel()">关 闭</button>
    </view>
  </uni-card>
</template>

<script>
export default {
  name: 'SkinDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    row: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      tabConfig: ['1星', '2星', '3星', '4星', '5星'],
      active: 0
    }
  },
  methods: {
    handleCancel () {
      this.$emit('update:modelValue', false)
      Object.assign(this.$data, this.$options.data.call(this))
    },
    tabChange (e) {
      if (this.active !== e.currentIndex) {
        this.active = e.currentIndex;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.skin-dialog {
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.skin-content {
  min-height: 300rpx;
}
</style>
