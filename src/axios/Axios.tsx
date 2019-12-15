import { AxiosConfig,AxiosResponse } from './types'
import qs from 'querystring'
import parseHeaders from 'parse-headers'

export default class Axios {
  // T代表响应体data的类型
  request<T>(config: AxiosConfig): Promise<AxiosResponse<T>> {
    return this.dispatchRequest<T>(config)
  }
  dispatchRequest<T>(config: AxiosConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let {method, url, params} = config
      if (params && typeof params === 'object') {
        url += (url.includes('?') ? '&' : '?') + qs.stringify(params)
      }
      request.open(method, url, true);
      request.onreadystatechange = function () {
        let isSuccess = request.readyState === 4 && request.status === 200
        if (isSuccess) {
          let response:AxiosResponse<T> = {
            data: request.response ? request.response : request.responseText,
            status: request.status,
            statusText: request.statusText,
            headers: parseHeaders(request.getAllResponseHeaders()),
            config,
            request
          }
          resolve(response)
        } else {
          reject('error')
        }
      }
      request.send(null)
    })
  }
}
