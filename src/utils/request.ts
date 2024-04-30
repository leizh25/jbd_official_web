import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'TOKEN过期';
        break;
      case 403:
        message = '禁止访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器错误';
        break;
      default:
        message = '网络出现问题';
        break;
    }

    return Promise.reject(status + message + error);
  }
);

export default request;
