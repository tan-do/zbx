
let BASE_URL;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/'

} else {
  BASE_URL = 'https://zbx-1256413829.cos.ap-nanjing.myqcloud.com';
}
export default BASE_URL