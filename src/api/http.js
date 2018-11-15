import axios from "axios";
// 环境的切换
const baseURL = "http://192.168.0.102:3000";
// 请求超时时间
axios.defaults.timeout = 5000;
// 请求拦截器
axios.interceptors.request.use(
  config => config,
  error => {
    return Promise.error(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
});
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + url, {
        params: params
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + url, params)
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  });
}
