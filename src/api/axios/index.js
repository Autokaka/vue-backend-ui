import axios from './axios'

let instance = axios()

export default {
  // 封装自定义的post/get/delete/put方法
  mysql: {
    post(url, params) {
      return instance.post(url, params)
    }
  }
}
