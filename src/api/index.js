import axios from '@/axios'

const api = {
  getSearchHotList (params) {
    return axios.get('api/meituan/header/searchHotWords.json', params)
  },
  getMenuList (params) {
    return axios.get('api/meituan/index/nav.json', params)
  },
  getSearchList (params) {
    return axios.get('api/meituan/header/search.json', params)
  },
  getCurPoisition (params) {
    return axios.get('api/meituan/city/getPosition.json', params)
  },
  getProvinceList (params) {
    return axios.get('api/meituan/city/province.json', params)
  },
  getCityList (params) {
    return axios.get('api/meituan/city/cityList.json', params)
  },
  getHotCity (params) {
    return axios.get('api/meituan/city/hot.json', params)
  },
  getRecentCity (params) {
    return axios.get('api/meituan/city/recents.json', params)
  },
  resultsByKeywords (params) {
    return axios.get('api/meituan/index/resultsByKeywords.json', params)
  },
  register (params) {
    return axios.get('api/meituan/register', params)
  },
  login (params) {
    return axios.get('api/meituan/login', {params})
  },
  getProducts (params) {
    return axios.get('api/meituan/list/goodsList.json')
  }
}

export default api
