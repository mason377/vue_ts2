<template>
  <div>vue + ts 的几种写法</div>
</template>
<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class App extends Vue {
  // 初始化数据
  msg = "消息"

  // 声明周期钩子
  private mounted() {
    this.greet()
  }

  // 计算属性
  get computedMsg() {
    return "computed " + this.msg
  }

  // 方法
  greet() {
    alert("greeting: " + this.msg)
  }
}
</script>
<style lang="scss" scoped></style>
