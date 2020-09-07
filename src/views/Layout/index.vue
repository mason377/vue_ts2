<template>
  <div class="container">
    <div class="list">
      <div
        class="card"
        v-for="(item, index) in card_data"
        :key="index"
        @click="clickCard(item)"
      >
        <!-- @click="$router.push(`/${item.path}`)" -->
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {}
})
export default class Home extends Vue {
  card_data: Array<any> = [{ name: "about", path: "about" }]

  clickCard(item: any) {
    console.log(123456)
    // console.log(item)
    this.$router.push(`/${item.path}`)
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 20px;
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-auto-rows: 200px;

    // grid-row-gap: 20px;
    // grid-column-gap: 20px;

    // grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式
    grid-gap: 20px;
    // grid-gap 不会在第一行上边加上gap
    margin-top: 20px;
    .card {
      border: 1px solid #ccc;
      height: 200px;
      line-height: 200px;
      text-align: center;
      border-radius: 15px;
    }
  }
}
</style>
