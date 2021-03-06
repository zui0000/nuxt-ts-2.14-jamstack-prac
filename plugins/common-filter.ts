import Vue from 'vue'
import dayjs from 'dayjs'

// 日付のフォーマット
Vue.filter('formatDate', (value) => {
  // APIの日付
  const format = dayjs(value).format('YYYY-MM-DD')
  return format
})
