import Axios from './Axios'
import { AxiosInstance } from './types'

// 写一个方法，专门创建实例
function createInstance() {
  // 定义类型的时候，类定义出来的实例，就是类本身
  let context: Axios = new Axios()
  // 让request方法里面的this等于context
  let instance = Axios.prototype.request.bind(context)
  // 把实例context，和原型prototype都把控到request方法
  instance = Object.assign(instance, Axios.prototype, context)
  // 返回request方法
  return instance
}
const axios = createInstance()
export default axios
export * from './types'
