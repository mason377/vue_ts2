<template>
  <div class="flayer" v-show="isShow">
    <div class="container">
      <div
        class="loading"
        style="border: 3px solid #fff;border-right-color: #409eff;"
      ></div>
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Loading",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      title: "数据加载中..."
    }
  }
}
</script>

<style scoped lang="scss">
div.flayer {
  width: 100%;
  min-height: 100%;
  z-index: 1000000;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 1);
  opacity: 0.8;
  .container {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .loading {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 20px auto;
      animation: loading 2s linear infinite;
    }
    .title {
      text-align: center;
      font-size: 16px;
      color: #fff;
    }
    @keyframes loading {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
