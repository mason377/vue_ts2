/**
 * @description: 自定义声明文件
 * @param {type}
 * @return:
 */

// 声明都要在 d.ts 文件中引入，所以不直接在 api.ts 文件中引入，先导出，ts解析时才能够解析到
export { AxiosInstance } from "axios/index"
import AxiosApi from "@/api/api"

// add types in vue
declare module "vue/types/vue" {
  interface Vue {
    $api: typeof AxiosApi
  }
}
