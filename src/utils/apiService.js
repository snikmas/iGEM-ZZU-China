import { message } from 'antd';
// 每次发送API请求时带上Token作为身份验证凭证，确实可以每次在发送请求前从localStorage中获取Token
import axios from 'axios';

// 创建一个axios实例 除了登陆用axios 其他之外的都用这个apiClient，可以校验cookie是否存在
const apiClient = axios.create({
  // baseURL: 'http://192.168.3.133:8000',
  // baseURL: '',
  timeout: 20000, // 请求超时时间
});

// 添加请求拦截器
apiClient.interceptors.request.use((config) => {
  // 导入 useAuth 获取当前用户是否有 token
  const token = localStorage.getItem("access_token");

  // 在请求发出前，获取 token 并附加到 headers 中
  if (token) {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    // 如果 token 不存在，则移除 Authorization 头
    delete config.headers['Authorization'];
    // 退出到 /login
    window.location.href = '/login';
  }

  return config;
});

// 添加响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // 如果状态码为 200
      return response;
    } else {
      // 如果状态码不是 200
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message.error('Error:'+ error.response);
          break;
        case 401:
          localStorage.removeItem("access_token");
          localStorage.setItem('userStatus', 'logout');
          localStorage.removeItem('userInfo');

          window.location.href = '/login';
          break;
        case 403:
          message.error('您没有权限访问此资源！');
          break;
        default:
          message.error('Error:'+ error.response);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

// 导出 apiClient 实例，以便在其他地方使用
export default apiClient;