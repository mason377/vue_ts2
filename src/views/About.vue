<template>
  <div class="about">
    <div class="test">测试postcss</div>
    <loading :isShow="isShow"></loading>
    <!-- <span>vuex-class,store/modules/data 结合命名空间使用</span> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { namespace } from "vuex-class"
import * as APITYPE from "@/@types/api-type"

const dataModule = namespace("modules")

@Component({
  components: {}
})
export default class About extends Vue {
  @dataModule.State("platforms") platforms!: Array<string>

  @dataModule.Getter("getPlatforms")
  get_platforms!: Array<string>

  @dataModule.Mutation("SET_PLATFORMS") SET_PLATFORMS!: (
    payload: Array<string>
  ) => void

  @dataModule.Action("dispatchPlatforms")
  dispatchPlatforms!: () => void

  queryParams: APITYPE.Basic = {
    name: "all",
    age: 15
  }

  isShow = true

  public created() {
    console.log("created")
    // state 获取
    console.log(this.platforms)
    // getter 获取
    console.log(this.get_platforms)
    this.isShow = true
  }

  public mounted() {
    console.log("mounted")
    this.SET_PLATFORMS(["66", "888"])
    setTimeout(() => {
      this.isShow = false
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.about {
  div.test {
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: blue;
    color: #fff;
  }
  span {
    color: red;
    font-size: 16px;
  }
}
</style>
