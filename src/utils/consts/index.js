import HEALTH_INDICATORS from './healthIndicators'

// 当前 host
const HOST = window.location.host

// 开发
const DEV = 'DEV'

// 生产
const PROD = 'PROD'

// 当前环境
const ENV = HOST === 'localhost:8080' ? DEV : PROD

// 基础地址
const BASE_URL = 'https://www.rjwb.cn' // ENV === !DEV ? 'http://localhost:3002' : 'https://www.chongyangyanglao.com'

// 接口地址
const API_URL = BASE_URL + '/apis/v1'

// 分页大小
const PAGE_SIZE = 10

// 网站标题
const TITLE = '网站后台'

export default {
  HOST,
  DEV,
  ENV,
  BASE_URL,
  API_URL,
  PAGE_SIZE,
  TITLE,
  HEALTH_INDICATORS
}
