export interface PlainObject {
  [name: string]: any; // 写法和Record<string, any>相同
}

export type Methods = 'get' | 'post' | 'delete'

export interface AxiosConfig {
  url: string;
  method: Methods;
  params: Record<string, any>
}

// request方法
export interface AxiosInstance {
  <T>(config: AxiosConfig): Promise<T>
}
// promise的泛型T代表成功态之后的返回值

// response的对象
export interface AxiosResponse <T>{
  data: T;
  status: number;
  statusText: string;
  headers?: Record<string, any>;
  config?: AxiosConfig;
  request?: XMLHttpRequest;
}
// 泛型T代表响应体的类型
