<template>
  <div class="about">
    <span>vuex-class,store/modules/data 结合命名空间使用</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const dataModule = namespace("modules");

@Component({
  components: {}
})
export default class About extends Vue {
  @dataModule.State("platforms") platforms!: Array<any>;

  @dataModule.Getter("getPlatforms")
  get_platforms!: Array<any>;

  @dataModule.Mutation("SET_PLATFORMS") SET_PLATFORMS!: (payload: any) => void;

  @dataModule.Action("dispatchPlatforms")
  dispatchPlatforms!: () => void;

  public created() {
    console.log("created");
    // state 获取
    console.log(this.platforms);
    // getter 获取
    console.log(this.get_platforms);
  }

  public mounted() {
    console.log("mounted");
    this.SET_PLATFORMS([666, 888]);
  }
}
</script>

<style scoped lang="scss"></style>
