import Vue from 'vue'
import dayjs from 'dayjs'

// 日付のフォーマット
Vue.filter('formatDate', (value) => {
  // APIの日付
  return dayjs(value).format('YYYY-MM-DD')
})
