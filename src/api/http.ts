import axios, { AxiosRequestConfig } from "axios"
import { cookieConfig, Configs } from "@/config/config"
import cookies from "js-cookie"

const service = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

// 取消重复请求
const pending: Array<{
  url: string
  cancel: () => void
}> = []

// 每次请求，产生取消方法，可对外取消
let cancels = null

const CancelToken = axios.CancelToken

const removePending = (config: AxiosRequestConfig) => {
  for (const p of pending.entries()) {
    const index: any = p[0]
    const item: any = p[1]
    // 当前请求在数组中存在时执行函数体
    if (item.url === config.url + "&request_type=" + config.method) {
      // 执行取消操作
      item.cancel()
      // 从数组中移除记录
      pending.splice(index, 1)
    }
  }
}

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 每次请求删除之前的请求
    removePending(config)
    // const token = cookies.get(cookieConfig.userseaToken) || ""
    const token =
      cookies.get(cookieConfig.userseaToken) || "5a041e7fc9da52000e1c5123"
    if (token) {
      config.headers["Token"] = token
    }

    config.cancelToken = new CancelToken((cancelFn: any) => {
      // 发送请求时添加到数组， 同时将回调的赋值到cancel【注意这里是引用】
      cancels = cancelFn
      pending.push({
        url: config.url + "&request_type=" + config.method,
        cancel: cancelFn
      })
    })
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res: any) => {
    removePending(res.config)
    return res
  },
  (error: any) => {
    if (
      error.response &&
      ((error.response.status === 400 && error.response.data.code === 40010) ||
        error.response.status === 401 ||
        error.response.data.message === "Bad Access Token" ||
        error.response.data.message === "Bad Token")
    ) {
      console.log("error1")
    } else if (error.response.data.message === "User Not In Whitelist") {
      console.log("error2")
    }
    return Promise.reject(error)
  }
)

export default {
  service,
  cancels,
  axios
}
