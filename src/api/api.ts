import http from "./http"
import { AxiosInstance } from "@/@types/definition"
import * as APITYPE from "@/@types/api-type"
import { Configs } from "@/config/config.ts"
const service: AxiosInstance = http.service

if (process.env.NODE_ENV === "production") {
  service.defaults.baseURL = Configs.PRODUCTION.API_BASE
} else {
  service.defaults.baseURL = Configs.DEV.API_BASE
}

export default {
  // games 分类写法
  games: {
    getGamesList() {
      return service.get("/games?page=1&page_size=15&sort=modified_time:-1")
    }
  }
}
