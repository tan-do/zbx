import axios from "axios";
import BASE_URL from "./env";

// 请求超时时间
axios.defaults.timeout = 1000 * 10;
// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// 设置公共url
axios.defaults.baseURL = '/';

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    //console.log(config);
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    //console.log(response);
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    console.log(error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params,) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default axios;
