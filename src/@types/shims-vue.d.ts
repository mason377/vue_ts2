// 如果没有此文件，router/index.ts 中 import 组件时是文件路径会有波浪线提示（虽然能正常编译），没有声明
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}
