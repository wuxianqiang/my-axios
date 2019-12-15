import axios, {AxiosResponse} from './axios'
const baseURL = 'http://loaclhost:8000'

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: '张三',
  age: 18
}

axios<User>({
  method: 'get',
  url: baseURL + '/get', // 基础路径拼接
  params: user // 查询字符串放到问好后面
}).then((response: AxiosResponse<User>) => {
  console.log(response.data)
  return response.data
})
